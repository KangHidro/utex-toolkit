import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SystemConstant } from '../core/constant';
import { SampleHtmlOtherCode, SampleHtmlVideoCode } from '../model/sample-html-code.model';
import { HtmlContent, HtmlContentObject } from '../model/structure-html-code.model';
import * as jsBeautify from 'js-beautify';

@Component({
  selector: 'app-main-tool',
  templateUrl: './main-tool.component.html',
  styleUrls: ['./main-tool.component.css']
})
export class MainToolComponent implements OnInit {

  @ViewChild('importDataElement')
  importDataElement!: ElementRef;

  listType = SystemConstant.CONTENT_TYPE;
  loadingTable = false;
  isDeleteMode = false;
  resizeTable = false;
  codeResult = '';

  expandSet = new Set<string>();
  onExpandChange(id: string, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  listData: HtmlContentObject = { data: [], showTableHeader: 1 };

  constructor(
    private nzModalSvc: NzModalService,
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.loadingTable = true;
    this.resizeTable = true;
    setTimeout(() => {
      this.loadingTable = false;
      this.resizeTable = false;
    }, 100);
  }

  ngOnInit(): void {
    // setInterval(() => window.dispatchEvent(new Event('resize')), 1000);
    // this.test = jsBeautify.html_beautify(new SampleHtmlVideoCode('1', '1', '1', '1', '1', '1').html, { indent_size: 1 });
  }

  generateHtmlCode() {
    this.codeResult = SystemConstant.JS_FOR_VIDEO_TYPE + '\n' + jsBeautify.html_beautify(this.listData.data.map(x => this.genCodeForLeaf(x)).join('\n<!-- -------------------- -->\n'), { indent_size: 1 });
  }

  genCodeForLeaf(leaf: HtmlContent): string {
    if (leaf.type === SystemConstant.CONTENT_TYPE.VIDEO) {
      if (leaf.name && leaf.content) {
        return new SampleHtmlVideoCode(
          this.generateRandomId(),
          this.generateRandomId(),
          leaf.name,
          this.generateRandomId(),
          this.generateRandomId(),
          `https://www.youtube.com/embed/${this.formatLinkYoutube(leaf.content)}?rel=0&amp;modestbranding=1`).html;
      } else {
        return '\n<!-- -----Có một mục chưa đủ nội dung----- -->\n';
      }
    } else if (leaf.type === SystemConstant.CONTENT_TYPE.OTHER) {
      return new SampleHtmlOtherCode(
        this.generateRandomId(),
        this.generateRandomId(),
        leaf.name,
        this.generateRandomId(),
        leaf.childs.length ? leaf.childs.map(child => this.genCodeForLeaf(child))
          .join('\n<!-- -------------------- -->\n') : 'Chèn nội dung tại đây'
      ).html;
    } else {
      return '\n<div class="card-body"><br></div>\n';
    }
  }

  addBlankMuc(parentObject: HtmlContentObject, indexChild: number) {
    if (indexChild >= 0) {
      parentObject.data[indexChild].childs = [...parentObject.data[indexChild].childs, new HtmlContent()];
      parentObject.data = [...parentObject.data];
    } else {
      parentObject.data = [...parentObject.data, new HtmlContent()];
    }
  }

  deleteRecord(parentObject: HtmlContentObject, indexChild: number) {
    parentObject.data.splice(indexChild, 1);
    parentObject.data = [...parentObject.data];
  }

  formatLinkYoutube(originalLink: string): string {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = originalLink.match(regExp);
    return (match && match[7].length == 11) ? match[7] : 'https://kanghidro.github.io/utex-toolkit/error';
  }

  importOldDataClick() {
    this.importDataElement.nativeElement.click();
  }

  importOldData(file: File) {
    this.codeResult = '';
    this.loadingTable = true;
    const fileReader = new FileReader();
    fileReader.readAsText(file, 'UTF-8');
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string') {
        try {
          this.listData = JSON.parse(fileReader.result);
          this.loadingTable = false;
        } catch (error) {
          this.nzModalSvc.error({ nzTitle: 'Có vẻ như dữ liệu sai định dạng!' });
          this.loadingTable = false;
        }
      } else {
        this.nzModalSvc.error({ nzTitle: 'Có vẻ như dữ liệu sai định dạng!' });
        this.loadingTable = false;
      }
    };
  }

  exportDataForSave() {
    if (this.listData.data.length) {
      const downloadData = JSON.stringify(this.listData);
      // return this.sanitizerSvc.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(downloadData))
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.href = 'data:text/json;charset=UTF-8,' + encodeURIComponent(downloadData);
      a.download = `utex-collapse-${this.generateRandomId(4)}.json`;
      a.click();
      a.remove();
    } else {
      this.nzModalSvc.error({ nzTitle: 'Chưa có dữ liệu nào để lưu lại!' });
    }
  }

  cleanAllData() {
    this.nzModalSvc.confirm({
      nzTitle: 'Bạn chắc nhắn muốn XOÁ TẤT CẢ dữ liệu chứ?',
      nzOnOk: () => {
        this.listData = { data: [], showTableHeader: 1 };
        this.codeResult = '';
      }
    });
  }

  dragDropChangeOrder(event: CdkDragDrop<HtmlContent[]>, listData: HtmlContent[]) {
    moveItemInArray(listData, event.previousIndex, event.currentIndex);
    listData = [...listData];
    // this.reCaculateMinPointByIndex();
  }

  generateRandomId(len?: number): string {
    const dic = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    if (len) {
      for (let i = len; i > 0; --i) {
        result += dic[Math.round(Math.random() * (dic.length - 1))];
      }
      return result;
    } else {
      return this.generateRandomId(32);
    }
  }

  loadDemo() {
    this.listData = {
      "data": [
        {
          "id": "35x8nxecjf3e2zxp",
          "name": "Khối con 1",
          "type": "OTHER",
          "content": "",
          "childs": [
            {
              "id": "ez47ebue3xa3gccf",
              "name": "Video 1",
              "type": "VIDEO",
              "content": "https://www.youtube.com/watch?v=6jZVsr7q-tE",
              "childs": []
            }
          ]
        }
      ],
      "showTableHeader": 1
    };
  }

  log() {
    console.log(this.listData);
  }

}

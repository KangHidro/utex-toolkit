import { Component, OnInit } from '@angular/core';
import { SystemConstant } from '../core/constant';
import { HtmlContent, HtmlContentObject } from '../model/structure-html-code.model';
// import * as jsBeautify from 'js-beautify';
// import { SampleHtmlVideoCode } from '../model/sample-html-code.model';

@Component({
  selector: 'app-main-tool',
  templateUrl: './main-tool.component.html',
  styleUrls: ['./main-tool.component.css']
})
export class MainToolComponent implements OnInit {

  listType = SystemConstant.CONTENT_TYPE;

  expandSet = new Set<string>();
  onExpandChange(id: string, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  listData: HtmlContentObject = { data: [], showTableHeader: 1 };

  constructor() { }

  ngOnInit(): void {
    // this.test = jsBeautify.html_beautify(new SampleHtmlVideoCode('1', '1', '1', '1', '1', '1').html, { indent_size: 1 });
  }

  addBlankMuc(parentObject: HtmlContentObject, indexChild: number) {
    if (indexChild >= 0) {
      parentObject.data[indexChild].childs = [...parentObject.data[indexChild].childs, new HtmlContent()];
      parentObject.data = [...parentObject.data];
    } else {
      parentObject.data = [...parentObject.data, new HtmlContent()];
    }
  }

  formatLinkYoutube(originalLink: string): string {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = originalLink.match(regExp);
    return (match && match[7].length == 11) ? match[7] : 'https://kanghidro.github.io/utex-toolkit/error-setting';
  }

  loadDemo() {
    this.listData = {
      "data": [
        {
          "id": "94hwhghr0y6vl4o2",
          "name": "Video 1",
          "type": "VIDEO",
          "content": "Link Video 1",
          "childs": [
            {
              "id": "glfofhv5k0b6gblq",
              "name": "",
              "type": "",
              "content": "",
              "childs": []
            },
            {
              "id": "aqx12l536rx38lfl",
              "name": "",
              "type": "",
              "content": "",
              "childs": []
            }
          ]
        },
        {
          "id": "25j175cadamnmqno",
          "name": "Khối con 2",
          "type": "OTHER",
          "content": "",
          "childs": [
            {
              "id": "ywo8ckcrrywqqwm6",
              "name": "Video 2.1",
              "type": "VIDEO",
              "content": "Link Video 2.1",
              "childs": []
            },
            {
              "id": "orn5qo3gfbdbki4d",
              "name": "Video 2.2",
              "type": "VIDEO",
              "content": "Link Video 2.2",
              "childs": []
            }
          ]
        },
        {
          "id": "1g2pad4cddxqbkg3",
          "name": "Video 3",
          "type": "VIDEO",
          "content": "Link Video 3",
          "childs": []
        }
      ],
      "showTableHeader": 1
    };
  }

  log() {
    console.log(this.listData);
  }

}

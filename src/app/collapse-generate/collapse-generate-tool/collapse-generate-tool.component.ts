import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse-generate-tool',
  templateUrl: './collapse-generate-tool.component.html',
  styleUrls: ['./collapse-generate-tool.component.scss']
})
export class CollapseGenerateToolComponent implements OnInit {

  chiMuc = '';
  inputValue = '';
  ouputCode = '';
  err = '';

  constructor() { }

  ngOnInit(): void {
  }

  addSeparator() {
    this.inputValue += ' | ';
    document.getElementById('inputdata').focus();
  }

  genCode() {
    try {
      this.err = '';
      this.ouputCode = '';
      if (this.chiMuc === '') {
        // tslint:disable-next-line:no-string-throw
        throw 'Vui lòng điền bước 1';
      } else if (this.inputValue === '') {
        // tslint:disable-next-line:no-string-throw
        throw 'Vui lòng điền bước 2';
      } else {
        this.ouputCode = `<div id="accordion${this.chiMuc}">`;
        const listDanhMuc = this.inputValue.split('\n');
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < listDanhMuc.length; i++) {
          const element = listDanhMuc[i].split('|');
          if (element.length !== 3) {
            // tslint:disable-next-line:no-string-throw
            throw 'Bước 2 có lỗi định dạng ở dòng thứ ' + (i + 1) + '. Vui lòng kiểm tra lại.';
          } else {
            this.ouputCode += `
  <div class="card">
    <div class="card-header" id="heading${i + 1}">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${i + 1}" aria-expanded="false" aria-controls="collapse${i + 1}">${element[0].trim()}. ${element[1].trim()}</button>
      </h5>
    </div>
    <div id="collapse${i + 1}" class="collapse" aria-labelledby="heading${i + 1}" data-parent="#accordion${this.chiMuc}">
      <div class="card-body">
        <video controls="true"><source src="${element[2].trim()}">${element[2].trim()}</video>
      </div>
    </div>
  </div>
`;
            if (i === (listDanhMuc.length - 1)) {
              this.ouputCode += `</div>`;
            }
          }
        }
      }
    } catch (error) {
      this.err = error;
      console.log(error);
    }
  }

}

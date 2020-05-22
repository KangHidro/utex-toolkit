import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse-generate-tool',
  templateUrl: './collapse-generate-tool.component.html',
  styleUrls: ['./collapse-generate-tool.component.scss']
})
export class CollapseGenerateToolComponent implements OnInit {

  thuTu = '';
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
  addVideoSeparator() {
    this.inputValue += ' ** ';
    document.getElementById('inputdata').focus();
  }
  addContentMaker() {
    this.inputValue += ' ~ ';
    document.getElementById('inputdata').focus();
  }

  genCode() {
    try {
      this.err = '';
      this.ouputCode = '';
      if (this.thuTu === '' || this.thuTu === null) {
        // tslint:disable-next-line:no-string-throw
        throw 'Vui lòng điền bước 1';
      } else if (this.inputValue === '') {
        // tslint:disable-next-line:no-string-throw
        throw 'Vui lòng điền bước 2';
      } else {
        this.ouputCode = `<div id="accordion${this.thuTu}">`;
        const listDanhMuc = this.inputValue.split('\n');
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < listDanhMuc.length; i++) {
          const element = listDanhMuc[i].split('|');
          if (element.length !== 2) {
            // tslint:disable-next-line:no-string-throw
            throw 'Bước 2 có lỗi định dạng ở dòng thứ ' + (i + 1) + '. Vui lòng kiểm tra lại.';
          } else {
            if (element[1].trim() === '~') {
              this.ouputCode += `
  <div class="card">
    <div class="card-header" id="heading${i + 1}">
      <h5 class="mb-0">
        <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#collapse${this.thuTu}s${i + 1}" aria-expanded="false" aria-controls="collapse${this.thuTu}s${i + 1}">${element[0].trim()}</button>
      </h5>
    </div>
    <div id="collapse${this.thuTu}s${i + 1}" class="collapse" aria-labelledby="heading${i + 1}" data-parent="#accordion${this.thuTu}">
      <div class="card-body">Nội dung</div>
      <div class="card-body">...</div>
    </div>
  </div>
            `;
            } else if (!element[1].includes('**')) {
              this.ouputCode += `
  <div class="card">
    <div class="card-header" id="heading${i + 1}">
      <h5 class="mb-0">
        <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#collapse${this.thuTu}s${i + 1}" aria-expanded="false" aria-controls="collapse${this.thuTu}s${i + 1}">${element[0].trim()}</button>
      </h5>
    </div>
    <div id="collapse${this.thuTu}s${i + 1}" class="collapse" aria-labelledby="heading${i + 1}" data-parent="#accordion${this.thuTu}">
      <div class="card-body"></div>
      <div class="card-body card-body-custom">
        <video controls="true"><source src="${element[1].trim()}">${element[1].trim()}</video>
      </div>
      <div class="card-body"></div>
    </div>
  </div>
            `;
              if (i === (listDanhMuc.length - 1)) {
                this.ouputCode += `</div>`;
              }
            } else {
              const listVideo = element[1].split('**');
              this.ouputCode += `
  <div class="card">
    <div class="card-header" id="heading${i + 1}">
      <h5 class="mb-0">
        <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#collapse${this.thuTu}s${i + 1}" aria-expanded="false" aria-controls="collapse${this.thuTu}s${i + 1}">${element[0].trim()}</button>
      </h5>
    </div>
    <div id="collapse${this.thuTu}s${i + 1}" class="collapse" aria-labelledby="heading${i + 1}" data-parent="#accordion${this.thuTu}">
      <div class="card-body card-body-custom">`;
              // For list video
              // tslint:disable-next-line:prefer-for-of
              for (let j = 0; j < listVideo.length; j++) {
                this.ouputCode += `
        <video controls="true"><source src="${listVideo[j].trim()}">${listVideo[j].trim()}</video><br>`;
              }
              this.ouputCode += `
      </div>
      <div class="card-body"></div>
    </div>
  </div>`;
              if (i === (listDanhMuc.length - 1)) {
                this.ouputCode += `</div>`;
              }
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

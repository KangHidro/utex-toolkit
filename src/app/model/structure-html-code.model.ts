import { SystemConstant } from "../core/constant";

function generateRandomId(len?: number): string {
  const dic = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  if (len) {
    for (let i = len; i > 0; --i) {
      result += dic[Math.round(Math.random() * (dic.length - 1))];
    }
    return result;
  } else {
    return generateRandomId(16);
  }
}

export class HtmlContent {
  id: string;
  name: string;
  type: string;
  content: string;
  childs: HtmlContent[];
  constructor() {
    this.id = generateRandomId();
    this.name = '';
    this.type = SystemConstant.CONTENT_TYPE.VIDEO;
    this.content = '';
    this.childs = [];
  }
}

export class HtmlContentObject {
  data: HtmlContent[] = [];
  showTableHeader: number = 0;
}

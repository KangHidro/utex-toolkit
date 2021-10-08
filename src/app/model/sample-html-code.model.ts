export class SampleHtmlVideoCode {
  js: string;
  html: string;
  constructor(
    aco_id: string,
    aco_head_id: string,
    cls_index: string,
    video_id: string,
    video_link: string,
    video_name: string
  ) {
    this.js = `
    <script>function attachLink(e,t){document.getElementById(e).src==t?document.getElementById(e).src="":document.getElementById(e).src=t}</script>`;
    this.html = `
   <div id="aco%%__aco_id__%%">
    <div class="card">
     <div class="card-header" id="%%__aco_head_id__%%">
      <h5 class="mb-0">
       <button type="button" class="btn btn-link" data-toggle="collapse"
        data-target="#cls%%__aco_id__%%part%%__cls_index__%%" aria-expanded="false"
        aria-controls="cls%%__aco_id__%%part%%__cls_index__%%"
        onclick="attachLink('%%__video_id__%%', '%%__video_link__%%')">
        %%__video_name__%%
       </button>
      </h5>
     </div>
     <div id="cls%%__aco_id__%%part%%__cls_index__%%" class="collapse" aria-labelledby="%%__aco_head_id__%%"
      data-parent="#aco%%__aco_id__%%">
      <div class="card-body card-body-custom">
      <div class="card-body></div>
       <div class="k-container">
        <iframe id="%%__video_id__%%" class="k-responsive-iframe" src="" frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen></iframe>
       </div>
      </div>
      <div class="card-body></div>
     </div>
    </div>
   </div>
   `
      .replace(/%%__aco_id__%%/g, aco_id)
      .replace(/%%__aco_head_id__%%/g, aco_head_id)
      .replace(/%%__cls_index__%%/g, cls_index)
      .replace(/%%__video_id__%%/g, video_id)
      .replace(/%%__video_link__%%/g, video_link)
      .replace(/%%__video_name_%%/g, video_name);
  }
}

export class SampleHtmlOtherCode {
  html: string;
  constructor(
    aco_id: string,
    aco_head_id: string,
    cls_index: string,
    div_name: string
  ) {
    this.html = `
   <div id="aco%%__aco_id__%%">
    <div class="card">
     <div class="card-header" id="%%__aco_head_id__%%">
      <h5 class="mb-0">
       <button type="button" class="btn btn-link" data-toggle="collapse"
        data-target="#cls%%__aco_id__%%part%%__cls_index__%%" aria-expanded="false"
        aria-controls="cls%%__aco_id__%%part%%__cls_index__%%">
        %%__div_name__%%
       </button>
      </h5>
     </div>
     <div id="cls%%__aco_id__%%part%%__cls_index__%%" class="collapse" aria-labelledby="%%__aco_head_id__%%"
      data-parent="#aco%%__aco_id__%%">
      <div class="card-body card-body-custom">
       Thêm nội dung ở đây
      </div>
     </div>
    </div>
   </div>
   `
      .replace(/%%__aco_id__%%/g, aco_id)
      .replace(/%%__aco_head_id__%%/g, aco_head_id)
      .replace(/%%__cls_index__%%/g, cls_index)
      .replace(/%%__div_name_%%/g, div_name);
  }
}

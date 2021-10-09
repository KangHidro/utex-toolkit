export class SampleHtmlVideoCode {
  html: string;
  constructor(
    aco_id: string,
    aco_head_id: string,
    aco_name: string,
    cls_id: string,
    video_id: string,
    video_link: string,
  ) {
    this.html = `
   <div id="aco%%__aco_id__%%">
    <div class="card">
     <div class="card-header" id="head%%__aco_head_id__%%">
      <h5 class="mb-0">
       <button type="button" class="btn btn-link" data-toggle="collapse"
        data-target="#cls%%__cls_id__%%" aria-expanded="false"
        aria-controls="cls%%__cls_id__%%"
        onclick="attachLink('%%__video_id__%%', '%%__video_link__%%')">
        %%__aco_name__%%
       </button>
      </h5>
     </div>
     <div id="cls%%__cls_id__%%" class="collapse" aria-labelledby="head%%__aco_head_id__%%"
      data-parent="#aco%%__aco_id__%%">
      <div class="card-body"></div>
      <div class="card-body card-body-custom">
       <div class="k-container">
        <iframe id="%%__video_id__%%" class="k-responsive-iframe" src="" frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen></iframe>
       </div>
      </div>
      <div class="card-body"></div>
     </div>
    </div>
   </div>
   `
      .replace(/%%__aco_name__%%/g, aco_name)
      .replace(/%%__aco_id__%%/g, aco_id)
      .replace(/%%__aco_head_id__%%/g, aco_head_id)
      .replace(/%%__cls_id__%%/g, cls_id)
      .replace(/%%__video_id__%%/g, video_id)
      .replace(/%%__video_link__%%/g, video_link);
  }
}

export class SampleHtmlOtherCode {
  html: string;
  constructor(
    aco_id: string,
    aco_head_id: string,
    aco_name: string,
    cls_id: string,
    div_data?: string,
  ) {
    this.html = `
    <div id="aco%%__aco_id__%%">
    <div class="card">
     <div class="card-header" id="head%%__aco_head_id__%%">
      <h5 class="mb-0">
       <button type="button" class="btn btn-link" data-toggle="collapse"
        data-target="#cls%%__cls_id__%%" aria-expanded="false"
        aria-controls="cls%%__cls_id__%%">
        %%__aco_name__%%
       </button>
      </h5>
     </div>
     <div id="cls%%__cls_id__%%" class="collapse" aria-labelledby="head%%__aco_head_id__%%"
      data-parent="#aco%%__aco_id__%%">
      <div class="card-body">
        %%__div_data__%%
      </div>
     </div>
    </div>
   </div>
   `
      .replace(/%%__aco_id__%%/g, aco_id)
      .replace(/%%__aco_head_id__%%/g, aco_head_id)
      .replace(/%%__aco_name__%%/g, aco_name)
      .replace(/%%__cls_id__%%/g, cls_id)
      .replace(/%%__div_data__%%/g, div_data ?? 'Chèn nội dung tại đây');
  }
}

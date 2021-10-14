export class SystemConstant {
  public static CONTENT_TYPE = {
    VIDEO: 'VIDEO',
    EMPTY: 'EMPTY',
    OTHER: 'OTHER',
  };

  public static JS_FOR_VIDEO_TYPE = '<script>function attachLink(t,e){"complete"===document.readyState?document.getElementById(t).src=e:alert(`Dữ liệu vẫn đang tải...\nVui lòng bấm OK và chờ thêm giây lát!`)}</script>';
}

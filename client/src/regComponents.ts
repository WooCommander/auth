import { App } from "vue";

import BsRow from "tirscript3-bootstrap/src/bs-row.vue";
import BsCol from "tirscript3-bootstrap/src/bs-col.vue";
import BsContainer from "tirscript3-bootstrap/src/bs-container.vue";

import Tirscript3DropdownMenu from "tirscript3-dropdown-menu/src/tirscript3-dropdown-menu.vue";
import Tirscript3DropdownMenuItem from "tirscript3-dropdown-menu/src/tirscript3-dropdown-menu-item.vue";
import Tirscript3DropdownMenuSub from "tirscript3-dropdown-menu/src/tirscript3-dropdown-menu-sub.vue";


// import Tirscript3CropImage from "tirscript3-crop-image/src/tirscript3-crop-image.vue";
import Tirscript3Loading from "tirscript3-loading/src/tirscript3-loading.vue";
import Tirscript3Input from "tirscript3-input/src/tirscript3-input.vue";
import Tirscript3Textarea from "tirscript3-textarea/src/tirscript-textarea.vue";
import Tirscript3Button from "tirscript3-button/src/tirscript3-button.vue";
import Tirscript3DatePicker from "tirscript3-date-picker/src/tirscript3-date-picker.vue";
// import Tirscript3Checkbox from "tirscript3-checkbox/src/tirscript3-checkbox.vue";

// import Tirscriptt3TextEditor from "tirscript3-text-editor/src/tirscript3-text-editor.vue";

import Tirscript3ToggleButton from "tirscript3-radio-group/src/tirscript3-toggle-button.vue";
import Tirscript3RadioButton from "tirscript3-radio-group/src/tirscript3-radio-button.vue";

import Tirscript3Dropdown from "tirscript3-dropdown/src/tirscript3-dropdown.vue";
// import Tirscript3ColorDropdown from "tirscript3-color-dropdown/src/tirscript3-color-dropdown.vue";



import Tirscript3BoxMenu from "tirscript3-box-menu/src/tirscript3-box-menu.vue";
import Tirscript3ListView from "tirscript3-list-view/src/tirscript3-list-view.vue";
import Tirscript3ListViewItem from "tirscript3-list-view/src/tirscript3-list-view-item.vue";

import Tirscript3Tags from "tirscript3-tags/src/tirscript3-tags.vue";
import Tirscript3TagsItem from "tirscript3-tags/src/tirscript3-tags-item.vue";

import Tirscript3ModalWindow from "tirscript3-modal-window/src/tirscript3-modal-window.vue";
import Tirscript3Scroll from "tirscript3-scroll/src/tirscript3-scroll.vue";



export default (app: App<Element>) => {
  app.component("BsRow", BsRow);
  app.component("BsCol", BsCol);
  app.component("BsContainer", BsContainer);
  app.component("Tirscript3Input", Tirscript3Input);

  // app.component("Tirscript3CropImage", Tirscript3CropImage);





  app.component("Tirscript3DropdownMenu", Tirscript3DropdownMenu);
  app.component("Tirscript3DropdownMenuItem", Tirscript3DropdownMenuItem);
  app.component("Tirscript3DropdownMenuSub", Tirscript3DropdownMenuSub);

  app.component("Tirscript3Loading", Tirscript3Loading);

  app.component("Tirscript3Textarea", Tirscript3Textarea);

  app.component("Tirscript3Button", Tirscript3Button);
  app.component("Tirscript3DatePicker", Tirscript3DatePicker);
  // app.component("Tirscript3Checkbox", Tirscript3Checkbox);
  app.component("Tirscript3ToggleButton", Tirscript3ToggleButton);
  app.component("Tirscript3RadioButton", Tirscript3RadioButton);


  app.component("Tirscript3Dropdown", Tirscript3Dropdown);
  // app.component("Tirscript3ColorDropdown", Tirscript3ColorDropdown);
  // app.component("Tirscript3TextEditor", Tirscriptt3TextEditor);
  app.component("Tirscript3BoxMenu", Tirscript3BoxMenu);
  app.component("Tirscript3ListView", Tirscript3ListView);
  app.component("Tirscript3ListViewItem", Tirscript3ListViewItem);

  app.component("Tirscript3Tags", Tirscript3Tags);
  app.component("Tirscript3TagsItem", Tirscript3TagsItem);
  app.component("Tirscript3ModalWindow", Tirscript3ModalWindow);
  app.component("Tirscript3Scroll", Tirscript3Scroll);

};

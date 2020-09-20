import { Component, Vue } from "vue-property-decorator";

// bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

// components
import Top from "./components/Top.vue";
import About from "./components/About.vue";
import Skill from "./components/Skill.vue";
import Blog from "./components/Blog.vue";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

// fontawesome setting
library.add(fas);
library.add(fab);
library.add(far);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

@Component({
  components: {
    Top,
    About,
    Skill,
    Blog
  }
})
export default class App extends Vue {}

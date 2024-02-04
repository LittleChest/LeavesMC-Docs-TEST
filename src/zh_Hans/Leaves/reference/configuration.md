# 配置

<!--suppress HtmlUnknownAttribute -->
<script setup>
import ConfigViewer from "/components/ConfigViewer.vue";
import { data } from '/config-spec/leaves/zhHans.data.ts';
</script>

<!--suppress VueMissingComponentImportInspection -->

<ConfigViewer :data=data name="leaves.yml"></ConfigViewer>

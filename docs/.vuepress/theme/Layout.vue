<template> 
  <div class="theme-container">
    <Header />
    <main>
      <Content/>
    </main>
  </div>
</template>

<script>
  import Header from './partials/Header.vue'

  export default {
  components: { Header },
    name: 'Layout'
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&family=Merriweather:wght@400;700&display=swap');

  .btn, .button {
    font-size: 20px;
    line-height: 26px;
    font-weight: 400;
    color: inherit;

    border: 1px solid;
    border-radius: 7px;
    padding: 14px 32px;

    text-decoration: none;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    list-style-type: none;
  }

  body {
    background-color: #fff;
    color: #151926;
    font-family: 'IBM Plex Sans', sans-serif;

    font-size: 16px;
    line-height: 26px;
    font-weight: normal;
    min-height: calc(100vh - 35px);
    // margin-bottom: 35px;
    position: relative;

    // position: relative;
    // overflow: hidden;
    // font-family: 'Merriweather', serif;
  }

  /* Theme Basis */

  main {
    display: flex;
    justify-content: space-between;
    padding: 0 45px;
  }

  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid;
  }

  p {
    margin-bottom: 30px;
  }

  code[class*=language-],pre[class*=language-]{color:#000;background:0 0;text-shadow:0 1px #fff;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-] ::-moz-selection,code[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection{text-shadow:none;background:#b3d4fc}code[class*=language-] ::selection,code[class*=language-]::selection,pre[class*=language-] ::selection,pre[class*=language-]::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.token.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#9a6e3a;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.class-name,.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}
</style>
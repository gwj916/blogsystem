import Mock from 'mockjs'
import qs from 'querystring'
Mock.mock('/api/blogtype', 'get', {
    "code": 0,
    "msg": "",
    "data|10-20": [
        {
            "id|+1": 1,
            name: "分类@id",
            "artcount|0-300": 0,
            "order|+2": 1,
        }
    ]
});
Mock.mock(/^\/api\/blog(\?.+)?$/, 'get', function (options) {
    const query = qs.parse(options.url)
    return Mock.mock({
        "code": 0,
        "msg": "",
        data: {
            "total|2000-3000": 0,
            [`rows|${query.limit || 10}`]: [
                {
                    id: "@guid",
                    title: "@ctitle",
                    description: "@cparagraph(1,10)",
                    category: {
                        "id|1-10": 0,
                        name: "分类@id",
                    },
                    "scanNumber|0-3000": 0,
                    "commentNumber|0-300": 30,
                    "thumb": [Mock.Random.image("300x250", "#000", "#fff", "image"), null],
                    createdate: `@date('yyyy-MM--dd ')`
                }
            ]

        }
    })
})
Mock.mock(/^\/api\/blog\/[^/]+$/, 'get', {
    "code": 0,
    "msg": "",
    data: {
        id: "@guid",
        title: "Vue.js 模板语法",
        description: "@cparagraph(1,10)",
        category: {
            "id|1-10": 1,
            name: "分类@id",
        },
        "scanNumber|0-10000": 0,
        "commentNumber|0-100": 30,
        "thumb": [Mock.Random.image("300x250", "#000", "#fff", "image"), null],
        createdate: `@date('yyyy-MM--dd ')`,
        toc: [
            { name: "介绍", anchor: "article-md-title-1" },
            {
                name: "模板语法",
                anchor: true,
                children: [
                    { name: "插值", 
                    anchor: "article-md-title-2" ,
                    children: [
                            { name: "文本", anchor: "article-md-title-3" },
                            { name: "原始HTML", anchor: "article-md-title-4" },
                            { name: "Atteribute", anchor: "article-md-title-5" },
                            { name: "javascript表达式", anchor: "article-md-title-6" },
                        ],
                    },
                    { name: "指令", 
                    anchor: "article-md-title-7" ,
                    children: [
                            { name: "参数", anchor: "article-md-title-8" },
                            { name: "动态参数", anchor: "article-md-title-9" },
                            { name: "修饰符", anchor: "article-md-title-10" },
                        ],
                    }, { name: "缩写", 
                    anchor: "article-md-title-11" ,
                    children: [
                            { name: "v-bind", anchor: "article-md-title-12" },
                            { name: "v-on ", anchor: "article-md-title-13" },
                        ],
                    },
                ],
            },
        ],
        htmlconent: `
        <br><br>
              <p id="article-md-title-2">Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。</p>
              <br><br>
              <p>Vue.js 的核心是一个允许你采用简洁的模板语法来声明式的将数据渲染进 DOM 的系统。</p>
              <br><br>
              <p>结合响应系统，在应用状态改变时， Vue 能够智能地计算出重新渲染组件的最小代价并应用到 DOM 操作上。</p>
              
              <hr><br><br>
              <h2 id="article-md-title-2">插值</h2>
           
              <h3 id="article-md-title-3">文本</h3><br>
              <p>
              数据绑定最常见的形式就是使用 {{...}}（双大括号）的文本插值：</p><br><br>
              
              <div class="example">
              <h2 class="example">文本插值</h2><br><br>
              <div class="example_code">
              </div>
              <br>
              <a target="_blank" href="/try/try.php?filename=vue2-hw" class="tryitbtn" rel="noopener noreferrer">尝试一下 »</a>
              
              </div>
              <br>
              <h3 id="article-md-title-4">Html</h3>
              <br><br>
              <p>使用 v-html 指令用于输出 html 代码：</p><br>
              
              <div class="example">
              <h2 class="example">v-html 指令</h2><br><br>
              <div class="example_code">
              
                  
              </span><span class="hl-brackets">&lt;</span><span class="hl-reserved">script</span><span class="hl-brackets">&gt;</span><span class="hl-code">
              new Vue({
                el: '#app',
                data: {
                  message: '</span><span class="hl-brackets">&lt;</span><span class="hl-reserved">h1</span><span class="hl-brackets">&gt;</span><span class="hl-code">菜鸟教程</span><span class="hl-brackets">&lt;/</span><span class="hl-reserved">h1</span><span class="hl-brackets">&gt;</span><span class="hl-code">'
                }
              })
              </span><span class="hl-brackets">&lt;/</span><span class="hl-reserved">script</span><span class="hl-brackets">&gt;</span></div>
              </div>
              <br>
              <a target="_blank" href="/try/try.php?filename=vue2-v-html" class="tryitbtn" rel="noopener noreferrer">尝试一下 »</a>
              </div>
              <h3 id="article-md-title-5">属性</h3><br><br>
              <p> HTML 属性中的值应使用 v-bind 指令。</p>
              
              
              
              <p>以下实例判断 use 的值，如果为 true 使用 class1 类的样式，否则不使用该类：</p>
              <div class="example">
              <h2 class="example">v-bind 指令</h2><br><br>
                  el: '#app',
                data:{
                    use: false
                }
              });
              </span><span class="hl-brackets">&lt;/</span><span class="hl-reserved">script</span><span class="hl-brackets">&gt;</span></div>
              </div>
              <br>
              <a target="_blank" href="/try/try.php?filename=vue2-v-bind" class="tryitbtn" rel="noopener noreferrer">尝试一下 »</a>
              </div>
              <h3>表达式</h3><br>
              <p>Vue.js 都提供了完全的 JavaScript 表达式支持。</p>
              <br>
              
              
              <div class="example">
              <h2 class="example" id="article-md-title-6">JavaScript 表达式</h2>
              <div class="example_code">
              <div class="hl-main"><span class="hl-brackets">&lt;</span><span class="hl-reserved">div</span><span class="hl-code">
               </span><span class="hl-var">id</span><span class="hl-code">=</span><span class="hl-quotes">&quot;</span><span class="hl-string">app</span>
               <span class="hl-quotes">&quot;</span><br><span class="hl-brackets">&gt;</span><span class="hl-code">
                  {{5+5}}</span><span class="hl-brackets">&lt;</span><span class="hl-reserved">br</span><span class="hl-brackets">&gt;</span><span class="hl-code">
                  {{ ok ? 'YES' : 'NO' }}</span><span class="hl-brackets">&lt;</span><span class="hl-reserved">br</span><br>
                  <span class="hl-brackets">&gt;</span><span class="hl-code">
                  {{ message.split('').reverse().join('') }}
                  </span><span class="hl-brackets">&lt;</span><span class="hl-reserved">div</span><span class="hl-code"> <br>
                  </span><span class="hl-var">v-bind:id</span><span class="hl-code">=</span><span class="hl-quotes">&quot;</span><br>
                  <span class="hl-string">'list-' + id</span><span class="hl-quotes">&quot;</span><span class="hl-brackets">&gt;</span><br>
                  <span class="hl-code">菜鸟教程</span><span class="hl-brackets">&lt;/</span><span class="hl-reserved">div</span><br>
                  <span class="hl-brackets">&gt;</span><span class="hl-code"><br>
              </span><span class="hl-brackets">&lt;/</span><span class="hl-reserved">div</span><span class="hl-brackets">&gt;</span><span class="hl-code">
                  
              </span><span class="hl-brackets">&lt;</span><span class="hl-reserved">script</span><span class="hl-brackets">&gt;</span><span class="hl-code">
              new Vue({
                el: '#app',
                data: {
                  ok: true,
                  message: 'RUNOOB',
                  id : 1
                }
              })
              </span><span class="hl-brackets">&lt;/</span><span class="hl-reserved">script</span><span class="hl-brackets">&gt;</span></div>
              </div>
              <br>
              <a target="_blank" href="/try/try.php?filename=vue2-js-expr" class="tryitbtn" rel="noopener noreferrer">尝试一下 »</a>
              </div>
              <hr>
              <h2 id="article-md-title-7">指令</h2><br><br>
              <p>指令是带有 v- 前缀的特殊属性。</p>
              <p>指令用于在表达式的值改变时，将某些行为应用到 DOM 上。如下例子：</p>
              <div class="example">
              <h2 class="example" >实例</h2>
             
              new Vue({
                el: '#app',
                data: {
                  seen: true
                }
              })
              </span><span class="hl-brackets">&lt;/</span><span class="hl-reserved">script</span><span class="hl-brackets">&gt;</span></div>
              </div>
              <br>
              <a target="_blank" href="/try/try.php?filename=vue2-v-if" class="tryitbtn" rel="noopener noreferrer">尝试一下 »</a>
              </div>
              <p>这里， v-if 指令将根据表达式 seen 的值(true 或 false )来决定是否插入 p 元素。</p>
              
              <h3 id="article-md-title-8">参数</h3><br>
              <p>参数在指令后以冒号指明。例如， v-bind 指令被用来响应地更新 HTML 属性：</p>
              <div class="example">
              <h2 class="example" id="article-md-title-9">实例</h2><br><br>
              new Vue({
                el: '#app',
                data: {
                  url: 'http://www.runoob.com'
                }
              })
              </span><span class="hl-brackets">&lt;/</span><span class="hl-reserved">script</span><span class="hl-brackets">&gt;</span></div>
              </div>
              <br>
              <a target="_blank" href="/try/try.php?filename=vue2-v-bind-href" class="tryitbtn" rel="noopener noreferrer">尝试一下 »</a>
              </div>
              <p>在这里 href 是参数，告知 v-bind 指令将该元素的 href 属性与表达式 url 的值绑定。</p>
              <p>另一个例子是 v-on 指令，它用于监听 DOM 事件：</p>
              <pre>
              &lt;a v-on:click="doSomething"&gt;
              </pre>
              <p>在这里参数是监听的事件名。</p>
              
              <h3 id="article-md-title-10">修饰符</h3>
              <p>修饰符是以半角句号 <span class="marked">.</span> 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，<strong>.prevent</strong> 修饰符告诉 <span class="marked">v-on</span> 指令对于触发的事件调用 <strong>event.preventDefault()</strong>：</p>
              
              
              <hr>
              <h2>用户输入</h2><br><br>
              <p>在 input 输入框中我们可以使用 v-model 指令来实现双向数据绑定：</p>
              
              <div class="example">
              <h2 class="example">双向数据绑定</h2><br><br>
              <div class="example_code">
             
              new Vue({
                el: '#app',
                data: {
                  message: 'Runoob!'
                }
              })
              </span><span class="hl-brackets">&lt;/</span><span class="hl-reserved">script</span><span class="hl-brackets">&gt;</span></div>
              </div>
              <br>
              <a target="_blank" href="/try/try.php?filename=vue2-v-model" class="tryitbtn" rel="noopener noreferrer">尝试一下 »</a>
              
              </div>
              <p><span class="marked">v-model</span> 指令用来在 input、select、textarea、checkbox、radio 等表单控件元素上创建双向数据绑定，根据表单上的值，自动更新绑定的元素的值。</p>
              
              
              <p>按钮的事件我们可以使用  v-on 监听事件，并对用户的输入进行响应。</p>
              <p>以下实例在用户点击按钮后对字符串进行反转操作：</p>
              
              <div class="example">
              <h2 class="example">字符串反转</h2><br><br>
              <div class="example_code">
             
              new Vue({
                el: '#app',
                data: {  
                  message: 'Runoob!'
                },
                methods: {
                  reverseMessage: function () {
                    this.message = this.message.split('').reverse().join('')
                  }
                }
              })
              </div>
              <br>
              <a target="_blank" href="/try/try.php?filename=vue2-reverse-message" class="tryitbtn" rel="noopener noreferrer">尝试一下 »</a>
              
              </div>
              <hr>
              <h2>过滤器</h2>
              <p>Vue.js 允许你自定义过滤器，被用作一些常见的文本格式化。由"管道符"指示, 格式如下：</p>
              <pre>
              &lt;!-- 在两个大括号中 --&gt;
              {{ message | capitalize }}
              
              &lt;!-- 在 v-bind 指令中 --&gt;
              &lt;div v-bind:id="rawId | formatId"&gt;&lt;/div&gt;
              </pre>
              
              <p>过滤器函数接受表达式的值作为第一个参数。</p>
              <p>以下实例对输入的字符串第一个字母转为大写：</p>
              <div class="example">
              <h2 class="example">实例</h2>
              <div class="example_code">
              
              
              </div>
              <br>
              <a target="_blank" href="/try/try.php?filename=vue2-filters-capitalize" class="tryitbtn" rel="noopener noreferrer">尝试一下 »</a>
              </div>
              <p>过滤器可以串联：</p>
              <pre>{{ message | filterA | filterB }}</pre>
              <p>过滤器是 JavaScript 函数，因此可以接受参数：</p>
              <pre>{{ message | filterA('arg1', arg2) }}</pre>
              <p>这里，message 是第一个参数，字符串 'arg1' 将传给过滤器作为第二个参数， arg2 表达式的值将被求值然后传给过滤器作为第三个参数。</p>
              
              <hr>
              <h2 id="article-md-title-11">缩写</h2><br><br>
              <h3 id="article-md-title-12">v-bind 缩写</h3>
              <div>这里我们遇到了一点新东西。你看到的 v-bind attribute 被称为指令。指令带有前缀 v-，以表示它们是 Vue 提供的特殊 attribute。<br><br>
              可能你已经猜到了，它们会在渲染的 DOM 上应用特殊的响应式行为。<br>在这里，该指令的意思是：“将这个元素节点的 title attribute 和 Vue 实例的 message property 保持一致”。
              <br><br>
              如果你再次打开浏览器的 JavaScript 控制台，输入 app2.message = '新消息'，就会再一次看到这个绑定了 title attribute 的 HTML 已经进行了更新。</div>
              <br> <br><br>
              <p>Vue.js 为两个最为常用的指令提供了特别的缩写：</p>
              <pre>
              &lt;!-- 完整语法 --&gt;
              <br>
              &lt;a v-bind:href="url"&gt;&lt;/a&gt;
              &lt;!-- 缩写 --&gt;
              <br>
              &lt;a :href="url"&gt;&lt;/a&gt;
              </pre>
              <h3 id="article-md-title-13">v-on 缩写</h3><br><br>
              <div>你可能已经注意到 Vue 组件非常类似于自定义元素——它是 Web 组件规范的一部分，这是因为 Vue 的组件语法部分参考了该规范。<br>
              例如 Vue 组件实现了 Slot API 与 is attribute。但是，还是有几个关键差别：
              <br>
              Web Components 规范已经完成并通过，但未被所有浏览器原生实现。<br>目前 Safari 10.1+、Chrome 54+ 和 Firefox 63+ 原生支持 Web Components。<br><br>
              相比之下，Vue 组件不需要任何 polyfill，并且在所有支持的浏览器 (IE9 及更高版本) 之下表现一致。必要时，Vue 组件也可以包装于原生自定义元素之内。<br>
              <br>
              Vue 组件提供了纯自定义元素所不具备的一些重要功能，最突出的是跨组件数据流、自定义事件通信以及构建工具集成。<br><br>
              
              虽然 Vue 内部没有使用自定义元素，不过在应用使用自定义元素、或以自定义元素形式发布时，依然有很好的互操作性。<br><br>
              Vue CLI 也支持将 Vue 组件构建成为原生的自定义元素。</div>
              <br> <br>
              <pre>
              &lt;!-- 完整语法 --&gt;
              <br> 
              &lt;a v-on:click="doSomething"&gt;&lt;/a&gt;<br>
              &lt;!-- 缩写 --&gt;<br>
              &lt;a @click="doSomething"&gt;&lt;/a&gt;<br>
              <br>
              </pre> <br>
              <div>如果你是来自 React 的开发者，你可能会对 Vuex 和 Redux 间的差异表示关注，Redux 是 React 生态环境中最流行的 Flux 实现。<br>
              Redux 事实上无法感知视图层，所以它能够轻松的通过一些简单绑定和 Vue 一起使用。<br>
              Vuex 区别在于它是一个专门为 Vue 应用所设计。这使得它能够更好地和 Vue 进行整合，同时提供简洁的 API 和改善过的开发体验。<br>

              简单状态管理起步使用<br>
              经常被忽略的是，Vue 应用中原始 data 对象的实际来源——当访问数据对象时，一个 Vue 实例只是简单的代理访问。<br>
              所以，如果你有一处需要被多个实例间共享的状态，可以简单地通过维护一份数据来实现共享</div><br>
              <div>当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的 property，并使用 Object.defineProperty 
              把这些 property 全部转为 getter/setter。Object.defineProperty 是 ES5 中一个无法 shim 的特性，
              这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。<br>

              这些 getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 能够追踪依赖，在 property 被访问和修改时通知变更。<br>
              这里需要注意的是不同浏览器在控制台打印数据对象时对 getter/setter 的格式化并不同，所以建议安装 vue-devtools 
              来获取对检查数据更加友好的用户界面。<br>
              
              每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把“接触”过的数据 property 记录为依赖。<br>
              之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。</div><br>
              <br> <br> <br> <br>
              `,

    }
})
Mock.mock('/api/comment', 'post', {
    "code": 0,
    "msg": "",
    data: {
            id: "@guid",
            nickname: "@cname",
            content: "@cparagraph(1,10)",
            createdate: Date.now(),
            "avater|1": [
                "https://c-ssl.duitang.com/uploads/item/202004/15/20200415161544_rpact.thumb.1000_0.jpg",
                "https://pic.qqtn.com/up/2017-11/2017112817293694830.jpg",
                "https://c-ssl.duitang.com/uploads/item/201908/21/20190821124426_kgzuk.thumb.1000_0.jpg",
                "https://c-ssl.duitang.com/uploads/item/201706/30/20170630150903_vVTtm.thumb.1000_0.jpeg",
                "https://pic1.zhimg.com/v2-de1aa49cb4b9210660270863a844a7d4_r.jpg"
            ]
        }
});
Mock.mock(/^\/api\/comment\/?(\?.+)?$/, 'post', function (options) {
    const query = qs.parse(options.url)
    return Mock.mock({
        "code": 0,
        "msg": "",
        data: {
            "total|50-200": 0,
            [`rows|${query.limit || 10}`]: [
                {
                    id: "@guid",
                    nickname: "@cname",
                    content: "@cparagraph(1,10)",
                    createdate: Date.now(),
                    "avater|1": [
                        "https://c-ssl.duitang.com/uploads/item/202004/15/20200415161544_rpact.thumb.1000_0.jpg",
                        "https://pic.qqtn.com/up/2017-11/2017112817293694830.jpg",
                        "https://c-ssl.duitang.com/uploads/item/201908/21/20190821124426_kgzuk.thumb.1000_0.jpg",
                        "https://c-ssl.duitang.com/uploads/item/201706/30/20170630150903_vVTtm.thumb.1000_0.jpeg",
                        "https://pic1.zhimg.com/v2-de1aa49cb4b9210660270863a844a7d4_r.jpg"
                    ]
                }
            ]

        }
    })
});

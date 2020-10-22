import pageContentTemplate from '@@/PageContent/template.js'
import { edit, remove } from './dialogs'
// 头部内容
const headerContent = {
  title: '电商管理-POP店管理-店铺管理'
}

// 筛选
const searchContent = {
  onSearch(values) {
    /*
     * return false表示不再刷新列表
     * return new Object(), 使用新对象刷新列表
     * return undefined，使用默认参数刷新列表
     **/
  },
  formItems: [
    {
      id: 'name',
      label: '名称',
      value: '12312312312'
    },
    {
      label() {
        return <span> 城市 <i class='el-icon-warning' /> </span>
      },
      items: [
        {
          id: 'city',
          componentName: 'Select',
          placeholder: '请选择城市',
          optionRender: (item) => {
          },
          options: [
            {
              value: '选项1',
              label: '黄金糕'
            },
            {
              value: '选项2',
              label: '双皮奶'
            },
            {
              value: '选项3',
              label: '蚵仔煎'
            },
            {
              value: '选项4',
              label: '龙须面'
            },
            {
              value: '选项5',
              label: '北京烤鸭'
            }
          ]
        },
        {
          id: 'region',
          componentName: 'Select',
          placeholder: '请选中区域',
          options: async() => {
            // console.log(city)
            console.log('dasda')
            await new Promise((r) => {
              setTimeout(() => {
                r()
              }, 3000)
            })
            return [
              {
                value: '选项5',
                label: '北京烤鸭'
              }
            ]
          }
        }
      ]
    }
  ]
}

const tableContent = {
  resources: 'orders',
  /**
   * table 默认查询参数
   * queryParams: {
   *  name: '1'
   * },
   **/
  columns: [
    {
      prop: 'title',
      label: '名称'
    },
    {
      prop: 'status',
      label: '状态'
    }
  ],
  actions: [
    {
      label: '删除',
      action(row) {
        remove(row)
        // this.remoev(id)
      }
    },
    {
      label: '更多',
      /**
       * 使用弹框（el-popover）形式展示更多按钮
       **/
      subActions: [
        {
          label: '下单',
          /**
           * action方法内部this指定当前table，您可以调用table下面所用方法，比如fetchList
           **/
          action(row) {
            console.log(row)
          }
        },
        {
          label: '预定'
        },
        {
          label: '详情'
        }
      ]
    }
  ],
  batchActions: [
    {
      label: '编辑',
      action(rows) {
        edit(rows)
      }
    }
  ]
}
export default pageContentTemplate({
  headerContent,
  searchContent,
  tableContent
})
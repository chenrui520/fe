import Dialog from '@@/Dialog'

export const edit = (rows) => new Dialog({
  title: '编辑',
  data() {
    return {
      msg: '1231'
    }
  },
  on: {
    async ok() {
      console.log('点击了确定')
      await new Promise((r, j) => {
        setTimeout(() => {
          r()
        }, 1000)
      })
    },
    close() {
      console.log('点击了取消')
      return false
    }
  },
  render() {
    return (
      <el-form ref='numberValidateForm' label-width='100px' class='demo-ruleForm'>
        <el-form-item label='年龄' prop='age'>
          <el-input value={this.msg} type='age' onInput={v => {
            this.msg = v
          }} autocomplete='off'/>
          {this.msg}
        </el-form-item>
      </el-form>
    )
  }
})

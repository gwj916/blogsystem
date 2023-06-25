import axios from 'axios'
const ins =axios.create()
ins.interceptors.response.use(function(res){
  if(res.data.code!==0){
      return null
  }
    return res.data.data
})

export default ins;
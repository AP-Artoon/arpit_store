import Data from './helper/Data.json'

const Api = () => {

    localStorage.setItem('store-data', JSON.stringify(Data))

}

export default Api

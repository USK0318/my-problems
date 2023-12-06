import axios from "axios";
import { useEffect, useState } from "react";

function App(){
    const[out,setout]=useState([])
    useEffect(()=>{axios.get('http://127.0.0.1:8000/api/data/').then(
        (res)=>{setout(res.data)}).catch(
            (a)=>{console.log(a)})},[])
            const dataSource = [
              {
                key: '1',
                name: 'Mike',
                age: 32,
                address: '10 Downing Street',
              },
              {
                key: '2',
                name: 'John',
                age: 42,
                address: '10 Downing Street',
              },
            ];
            
            const columns = [
              {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
              },
              {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
              },
            ];
            
           

    return(
        <div>
           <Table dataSource={dataSource} columns={columns} />;

        </div>
    )

}
  
export default App;

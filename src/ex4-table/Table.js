import React from 'react';

const TableHeader = () =>  {
return (
    <div>
<thead>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
            </tr>
            </thead>
    </div>
)
}

const TableAction = () => {
    return(
        <div>
            <button type = 'button' className='btn btn-danger'>Create</button>
            <button type = 'button' className='btn btn-warning'>Delete</button>
        </div>
    );
}


const TableBody = () =>  {
    return (
        <div>
              <tbody>
            <tr>
            <td>1</td>
            <td>Test</td>
            <td><TableAction /></td>
            </tr>

            <tr>
            <td>2</td>
            <td>Lubna</td>
            <td><TableAction /></td>
            </tr>
            </tbody>


        </div> 
    )

}
const Table = () => {
    return (
        <div>
            <table className='table table-striped'>
            <TableHeader />
            <TableBody />
           </table>
        </div>
    );
}

export default Table;
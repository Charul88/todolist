import React from 'react'

export default function TodoList() {
  return (
    <div className='pt-4'>
      <table class="table">
        <thead>
            <tr>
                <th className='col-2'>S.No</th>
                <th className='col-4'>Title</th>
                <th className='col-6'>Description</th>

                
            </tr>
        </thead>
        <tbody>
            <tr>
                <th className='col-2'>1</th>
                <th className='col-4'>Title</th>
                <td className='col-6'>
                    <div className='row'>
                        <div className='col-8'>
                            <p>
                                hello everyone
                            </p>
                            </div>
                                <div className='col-4'>
                                    <button type="button" class="btn btn-outline-dark">delete</button>
                                </div>
                            
                        
                    </div>
                </td>
            </tr>
            <tr>
                <th className='col-2'>2</th>
                <th className='col-4'>Title</th>
                <td className='col-6'>
                    <div className='row'>
                        <div className='col-8'>
                            <p>
                                hello everyone
                            </p>
                            </div>
                                <div className='col-4'>
                                    <button type="button" class="btn btn-outline-dark">delete</button>
                                </div>
                            
                                
                    </div>
                </td>
            </tr>
        </tbody>

      </table>
    </div>
  )
}

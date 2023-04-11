import React from 'react'

const FormAddUser = () => {
    return (
        <div>
            <h1 className='title'>Users</h1>
            <h2 className='subtitle'>Add New User</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form>
                            <div className="field">
                                <label className='label'>Name</label>
                                <div className="control">
                                    <input type="text" name="email" id="" className='input' placeholder='Name' />
                                </div>
                            </div>
                            <div className="field">
                                <label className='label'>Email</label>
                                <div className="control">
                                    <input type="text" name="email" id="" className='input' placeholder='Email' />
                                </div>
                            </div>
                            <div className="field">
                                <label className='label'>Password</label>
                                <div className="control">
                                    <input type="password" name="password" id="" className='input' placeholder='*******' />
                                </div>
                            </div>
                            <div className="field">
                                <label className='label'>Confirm Password</label>
                                <div className="control">
                                    <input type="password" name="password" id="" className='input' placeholder='*******' />
                                </div>
                            </div>
                            <div className="field">
                                <label className='label'>Role</label>
                                <div className="control">
                                    <div className="select is-fullwidth">
                                        <select>
                                            <option value="Admin">Admin</option>
                                            <option value="User">User</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="field mt-5">
                                <div className="control">
                                    <button type="submit" className='button is-success is-fullwidth'>Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormAddUser
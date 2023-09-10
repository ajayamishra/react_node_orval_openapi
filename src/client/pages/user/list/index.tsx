import { useEffect, useState } from 'react';
import { objectToCamel } from 'ts-case-convert';

import { User, useUsersIndex } from '../../../models/generated';

export const UserListPage = () => {
  const [userList, setUserList] = useState<User []>([]);

  const { isLoading, error, data } = useUsersIndex();

  useEffect(() => {
    // console.log('data=', data)
    if (data?.data?.users) {
      setUserList(objectToCamel(data?.data?.users))
    }
  }, [data]);

  if (isLoading) return <div>Data is Loading</div>

  if (!isLoading && error) return <div>Error while fetching data.</div>

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user: any, id: number) => {
            return (
              <tr key={id}>    
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

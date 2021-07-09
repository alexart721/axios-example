import React from 'react';
import { User } from '../../clients/client-user/types';
import { userClient } from '../lib/clients/userClient';

type Props = {};

export const Home: React.FC<Props> = () => {
  const [user, setUser] = React.useState<User>();

  React.useEffect(() => {
    (async() => {
      const { data } = await userClient.getUser('example-id');
      setUser(data);
    })()
  }, []);

  return (
    // Something here
    <>{user?.email}</>
  )
}

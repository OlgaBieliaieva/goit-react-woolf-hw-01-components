import user from '../data/user.json';
import stat from '../data/stat.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import Transactions from './transactions/Transactions';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        gap: 24,
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        user={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={stat} />
      <FriendList friends={friends} />
      <Transactions transactions={transactions} />
    </div>
  );
};

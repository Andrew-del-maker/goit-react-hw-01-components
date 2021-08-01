import React from 'react';

import user from './data/user.json'
import Profile from './components/profile/Profile';

import Statistics from './components/statistic/Statistic';
import statisticalData from './data/statistical-data.json';

import FriendList from './components/friend-list/friend-list';
import friends from './data/friends.json'

import transactions from './data/transactions.json'
import TransactionHistory from './components/transactions/Transactions'

function App() {
  return (
    <div className="App">
      
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      
      <Statistics
        stats={statisticalData} />
      
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;

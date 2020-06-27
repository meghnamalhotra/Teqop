const Realm = require('realm');
const UserSchema = {
  name: 'user',
  properties: {
    id: {type: 'int', default: 0},
    uniqueId: 'string',
    firstName: 'string',
    lastName: 'string',
    description: 'string',
  },
};
class RealmDb {
  pageSize = 20;
  constructor() {
    this.realmObj = new Realm({schema: [UserSchema]});
  }
  WriteDb = data => {
    this.realmObj.write(() => {
      this.realmObj.create('user', data);
    });
  };

  ReadDb = () => {
    this.userList = this.realmObj.objects('user');
    return this.userList;
  };
  FindDataById = id => {
    let userId = this.userList.findIndex(item => {
      return item.id === id;
    });
    if (userId === -1) {
      return false;
    } else {
      return true;
    }
  };
}
export default new RealmDb();

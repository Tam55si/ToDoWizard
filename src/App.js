import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};
function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '', showt: true });
  // const [getAlert, setGetAlert] = useState(false);

  // useEffect(() => {
  //   const getNotiAlert = () => {
  //     if (getAlert === true && alert.show === true) {
  //       <Alert {...alert} removeAlert={showAlert} list={list} />
  //     } return ('-----No New Notifications-----')

  //     // alert.show ?  : `${ />}`
  //   }
  //   return () => setGetAlert(false)

  // }, [getAlert])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'please enter value', false);

    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed', false);

    } else {
      showAlert(true, 'success', 'item added to the list', false);

      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName('');
    }
  };

  const showAlert = (show = false, type = '', msg = '', showt = true) => {
    setAlert({ show, type, msg, showt });
  };
  const clearList = () => {
    showAlert(true, 'danger', 'empty list', false);
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed', false);
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);
  return (
    <>
      <NavigationBar />
      <section className='section-center'>
        <form className='grocery-form' onSubmit={handleSubmit}>
          <h3 className='alert'>{alert.showt ? "---No Notifiation---" : alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}</h3>

          <h3>ToDoWizard</h3>
          {/* <h4 style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '13px' }}>Unleash your productivity with ToDoWizard</h4> */}
          <div className='form-control'>
            <input
              type='text'
              className='grocery'
              placeholder='e.g. study, draw'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type='submit' className='submit-btn'>
              {isEditing ? 'save' : 'submit'}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className='grocery-container'>
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button className='clear-btn' onClick={clearList}>
              clear items
            </button>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default App;
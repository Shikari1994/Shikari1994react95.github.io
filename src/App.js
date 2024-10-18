// App.js
import React, { useState } from 'react';
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import { Modal, TaskBar, List, TitleBar } from '@react95/core';
import { WindowsExplorer, ReaderClosed, Computer, Notepad } from '@react95/icons';
import TodoList from './components/TodoList';
import Calculator from './components/Calculator'; // Импортируем новый компонент
import SportRecords from './components/SportRecords';

const AppModal = ({ isOpen, onClose, title, icon, children }) => (
  isOpen && (
    <Modal
      icon={icon}
      title={title}
      titleBarOptions={[<TitleBar.Close key="close" onClick={onClose} />]}
      width="300px"
      height="400px"
    >
      {children}
    </Modal>
  )
);

function App() {
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [isThirdOpen, setIsThirdOpen] = useState(false);
  const [isFourthOpen, setIsFourthOpen] = useState(false);

  return (
    <div style={{ backgroundColor: '#00807F', height: '100vh', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div onClick={() => setIsFirstOpen(true)} style={{ cursor: 'pointer', textAlign: 'center' }}>
          <WindowsExplorer variant="32x32_4" />
          <p>Explorer</p>
        </div>
        <div onClick={() => setIsSecondOpen(true)} style={{ cursor: 'pointer', textAlign: 'center' }}>
          <ReaderClosed variant="32x32_4" />
          <p>Disk (C:)</p>
        </div>
        <div onClick={() => setIsThirdOpen(true)} style={{ cursor: 'pointer', textAlign: 'center' }}>
          <Computer variant="32x32_4" />
          <p>Computer</p>
        </div>
        <div onClick={() => setIsFourthOpen(true)} style={{ cursor: 'pointer', textAlign: 'center' }}>
          <Notepad variant="32x32_4" />
          <p>Notepad</p>
        </div>
      </div>

      <AppModal isOpen={isFirstOpen} onClose={() => setIsFirstOpen(false)} title="Windows Explorer" icon={<WindowsExplorer variant="16x16_4" />}>
        <SportRecords /> {/* Используем новый компонент для спортивных достижений */}
      </AppModal>

      <AppModal
        isOpen={isSecondOpen}
        onClose={() => setIsSecondOpen(false)}
        title="Local Disk (C:)"
        icon={<ReaderClosed variant="16x16_4" />}
      >
        <Modal.Content>
        <Calculator />  {/* Используем новый компонент */}
        </Modal.Content>
      </AppModal>

      <AppModal
        isOpen={isThirdOpen}
        onClose={() => setIsThirdOpen(false)}
        title="Computer"
        icon={<Computer variant="16x16_4" />}
      >
        <Modal.Content>
          <p>Содержимое окна "Computer".</p>
        </Modal.Content>
      </AppModal>

      <AppModal
        isOpen={isFourthOpen}
        onClose={() => setIsFourthOpen(false)}
        title="Notepad"
        icon={<Notepad variant="16x16_4" />}
      >
        <Modal.Content>
          <TodoList />
        </Modal.Content>
      </AppModal>

      <TaskBar
        list={
          <List>
            <List.Item icon={<WindowsExplorer variant="32x32_4" />} onClick={() => setIsFirstOpen(true)}>
              Windows Explorer
            </List.Item>
            <List.Item icon={<ReaderClosed variant="32x32_4" />} onClick={() => setIsSecondOpen(true)}>
              Local Disk (C:)
            </List.Item>
            <List.Item icon={<Computer variant="32x32_4" />} onClick={() => setIsThirdOpen(true)}>
              Computer
            </List.Item>
            <List.Item icon={<Notepad variant="32x32_4" />} onClick={() => setIsFourthOpen(true)}>
              Notepad
            </List.Item>
          </List>
        }
      />
    </div>
  );
}

export default App;

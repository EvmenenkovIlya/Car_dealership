import './TabControl.scss';
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

export const TabControl = () => {
  let newCarsCount = 5;
  let oldCarsCount = 3;
  let taxisCount = 2;
  return (
    <Tabs>
      <TabList>
        <Tab>
          Новые авто <span className="accent">{newCarsCount}</span>
        </Tab>
        <Tab>
          С пробегом <span className="accent">{oldCarsCount}</span>
        </Tab>
        <Tab>
          Такси <span className="accent">{taxisCount}</span>
        </Tab>
      </TabList>

      <TabPanel>
        <div>Новые машинки</div>
      </TabPanel>
      <TabPanel>
        <div>Машинки с пробегом</div>
      </TabPanel>
      <TabPanel>
        <div>Таксишки</div>
      </TabPanel>
    </Tabs>
  );
};

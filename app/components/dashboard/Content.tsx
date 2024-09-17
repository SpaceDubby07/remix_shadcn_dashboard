import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '~/components/ui/tabs';

import { ModeToggle } from '../utils/theme-toggle';
import Cards from './Cards';
import Dashboard from './Dashboard';

export default function Content() {
  return (
    <div>
      <section id="navigation-tabs" className="p-4">
        <Tabs defaultValue="account">
          <TabsList className="bg-transparent flex justify-between">
            <div>
              <TabsTrigger value="Mail">Mail</TabsTrigger>
              <TabsTrigger value="Dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="Cards">Cards</TabsTrigger>
              <TabsTrigger value="Tasks">Tasks</TabsTrigger>
              <TabsTrigger value="Forms">Forms</TabsTrigger>
              <TabsTrigger value="Music">Music</TabsTrigger>
              <TabsTrigger value="Account">Account</TabsTrigger>
            </div>
            <div>
              <ModeToggle />
            </div>
          </TabsList>

          <TabsContent value="Mail"></TabsContent>
          <TabsContent value="Dashboard">
            <Dashboard />
          </TabsContent>
          <TabsContent value="Cards">
            <Cards />
          </TabsContent>
          <TabsContent value="Tasks"></TabsContent>
          <TabsContent value="Forms"></TabsContent>
          <TabsContent value="Music"></TabsContent>
          <TabsContent value="Account"></TabsContent>
        </Tabs>
      </section>
    </div>
  );
}

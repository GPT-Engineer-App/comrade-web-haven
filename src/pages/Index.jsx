import { useState } from 'react';
import { Hammer, Star, Megaphone, Users, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [propagandaCount, setPropagandaCount] = useState(0);

  const increasePropaganda = () => {
    setPropagandaCount(prevCount => prevCount + 1);
  };

  return (
    <div className="min-h-screen bg-red-900 text-white">
      <header className="bg-red-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Hammer className="h-8 w-8 mr-2" />
            <h1 className="text-2xl font-bold">The People's White House</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-yellow-300">Manifesto</a></li>
              <li><a href="#" className="hover:text-yellow-300">Collective</a></li>
              <li><a href="#" className="hover:text-yellow-300">Five-Year Plan</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-8 p-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Welcome, Comrades!</h2>
        <p className="text-xl text-center mb-8">Together, we build a glorious future for all workers!</p>

        <div className="bg-red-800 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4">Today's Propaganda Poster</h3>
          <div className="bg-red-700 h-64 flex items-center justify-center">
            <p className="text-3xl font-bold text-center">Workers of the world, unite!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-red-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Megaphone className="h-6 w-6 mr-2" />
                Latest Decree
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>All means of production are now under control of the proletariat.</p>
            </CardContent>
          </Card>

          <Card className="bg-red-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="h-6 w-6 mr-2" />
                Worker of the Month
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Comrade Johnson, for exceeding quota by 200%</p>
            </CardContent>
          </Card>

          <Card className="bg-red-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-6 w-6 mr-2" />
                Spread Propaganda
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Propaganda Spread: {propagandaCount}</p>
            </CardContent>
            <CardFooter>
              <Button onClick={increasePropaganda} className="bg-yellow-600 hover:bg-yellow-700">
                Spread the Word!
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Card className="bg-red-800 mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-6 w-6 mr-2" />
              Upcoming Revolutionary Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>May 1st - International Workers' Day Parade</li>
              <li>July 15th - Collective Farm Appreciation Day</li>
              <li>October 10th - Annual Party Congress</li>
            </ul>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-red-800 p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 The People's White House. All rights collectively owned.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

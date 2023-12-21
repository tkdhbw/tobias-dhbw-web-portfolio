import React, { useState, useEffect } from 'react';

const ProxyDisplay = () => {
  const [proxies, setProxies] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    const fetchProxies = async () => {
      console.log('fetching proxies');
      try {
        const response = await fetch('http://172.104.150.190/ProxyList/proxyList.txt');
        const data = await response.text();
        const allLines = data.trim().split('\n');
  
        // Extract the date from the first line
        const dateLine = allLines[0];
        setDate(dateLine); // Assuming you have a state variable called `date`
  
        // Process the remaining lines for proxies
        const proxyLines = allLines.slice(1); // Skip the first line
        const parsedProxies = proxyLines.map(line => {
          const parts = line.split(', ').reduce((acc, part) => {
            const [key, value] = part.split(': ');
            acc[key] = value;
            return acc;
          }, {});
          return parts;
        });
        setProxies(parsedProxies);
      } catch (error) {
        console.error('Error fetching proxy data:', error);
      }
    };
  
    fetchProxies();
    const interval = setInterval(fetchProxies, 60000); // Update every 60 seconds
  
    return () => clearInterval(interval);
  }, []);
  

  return (
    <div className='overflow-x-auto mt-6'>
      <h3 class="text-xl font-semibold mt-4 pt-5 pb-5">Updated: {date}</h3>
      <table className='min-w-full leading-normal'>
        <thead>
          <tr>
            <th className='px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-white uppercase tracking-wider'>
              Proxy
            </th>
            <th className='px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-white uppercase tracking-wider'>
              Country
            </th>
            <th className='px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-white uppercase tracking-wider'>
              Type
            </th>
            <th className='px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-white uppercase tracking-wider'>
              Anonymity
            </th>
            <th className='px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-white uppercase tracking-wider'>
              Uptime
            </th>
            <th className='px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-white uppercase tracking-wider'>
              Check Date
            </th>
          </tr>
        </thead>
        <tbody>
          {proxies.map((proxy, index) => (
            <tr key={index}>
              <td className='px-5 py-5 border-b border-gray-200 text-sm text-white'>
                {proxy['Proxy']}
              </td>
              <td className='px-5 py-5 border-b border-gray-200 text-sm text-white'>
                {proxy['Country']}
              </td>
              <td className='px-5 py-5 border-b border-gray-200 text-sm text-white'>
                {proxy['Type']}
              </td>
              <td className='px-5 py-5 border-b border-gray-200 text-sm text-white'>
                {proxy['Anonymity']}
              </td>
              <td className='px-5 py-5 border-b border-gray-200 text-sm text-white'>
                {proxy['Uptime']}
              </td>
              <td className='px-5 py-5 border-b border-gray-200 text-sm text-white'>
                {proxy['Check Date']}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProxyDisplay;

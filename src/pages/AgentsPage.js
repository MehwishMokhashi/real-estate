import React from 'react';
import AgentCard from '../components/AgentCard';
import '../styles/AgentsPage.css';

const AgentsPage = () => {
  
  const agents = [
    {
      id: 1,
      name: "Priya",
      email: "Priya@realestate.com",
      phone: "+1 (123) 456-7890",
      specialization: "Residential Properties",
      image: "/images/priya.jpeg"
    },
    {
      id: 2,
      name: "Reena",
      email: "reena@realestate.com",
      phone: "+1 (345) 678-9012",
      specialization: "Luxury Homes",
      image: "/images/reena.jpeg"
    },
    {
      id: 3,
      name: "John",
      email: "John@realestate.com",
      phone: "+1 (345) 678-6012",
      specialization: "Luxury Apartments",
      image: "/images/john.jpeg"
    },
    {
      id: 4,
      name: "Alace",
      email: "alce@realestate.com",
      phone: "+1 (345) 678-8012",
      specialization: "Residential Properties",
      image: "/images/Alace.jpeg"
    },

  ];

  return (
    <div className="agents-page">
      <h1>Our Real Estate Agents</h1>
      <div className="agents-grid">
        {agents.map(agent => (
          <AgentCard key={agent.id} {...agent} />
        ))}
      </div>
    </div>
  );
};

export default AgentsPage;

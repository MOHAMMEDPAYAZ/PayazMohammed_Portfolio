import React, { useState, useEffect } from 'react';

// Main App component
const App = () => {
  // State for navigation (optional, for multi-page apps)
  const [currentPage, setCurrentPage] = useState('home');

  // Example data for your portfolio (you'll replace this!)
  const portfolioData = {
    name: "PAYAZ MOHAMMED",
    title: "Data Engineer",
    tagline: "Designing scalable ETL pipelines, automating data workflows, and delivering business-critical insights.",
    resumeLink: "#", // Replace with your resume link (e.g., a link to a PDF in Google Drive or Dropbox)
    about: {
      paragraphs: [
        "As a Data Engineer with 3+ years of experience, I specialize in designing scalable ETL pipelines, automating data workflows, and delivering business-critical insights using a robust stack of AWS, Azure, SQL, and various BI tools. My expertise lies in significantly improving data reliability, reducing processing times, and enabling faster, more informed decision-making for organizations.",
        "My professional journey includes impactful roles at United HealthCare and AT&T. At United HealthCare, I built and optimized ETL pipelines with Azure Data Factory and Synapse Analytics, automated certification renewals with Python and ADLS, and developed real-time Power BI dashboards. I also integrated disparate datasets using Databricks and Delta Lake, creating unified reporting platforms and enhancing data accessibility for business teams.",
        "During my tenure at AT&T, I designed scalable ETL pipelines using AWS Glue and Python to process over 5TB of telecom network data monthly, integrating diverse records into Amazon Redshift. I orchestrated and monitored complex data workflows using Airflow, improving reliability and simplifying error tracking. My contributions led to a 360-degree customer view, increased customer retention, and real-time access to critical KPIs for senior management through automated Tableau dashboards."
      ],
      profilePic: "http://googleusercontent.com/file_content/1", // Your photo
      education: [
        "Master of Science in Computer Science & IT, Sacred Heart University, Fairfield, CT - Dec 2023",
        "Bachelor of Technology in Electrical & Electronics Engineering, Andhra University, Visakhapatnam, India - Sep 2020"
      ],
      certifications: [
        "Microsoft Certified: Azure Data Fundamentals (DP-900) - Jul 2025"
      ]
    },
    skills: {
      languages: ["Python", "SQL", "DAX", "JavaScript", "Java", "Groovy", "C++", "C", "Scala", "Perl", "Shell Script", "Bash", "HTML"],
      cloudPlatforms: ["AWS (Glue, Lambda, S3, Redshift)", "Azure (Data Factory, Synapse, ADLS)", "Google Cloud (GCP, BigQuery, EC2)"],
      databases: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "HBase"],
      bigDataTools: ["PySpark", "Databricks", "Delta Lake", "Hive", "Pig", "Apache Spark", "Hadoop", "Presto", "Flink", "Kinesis", "Parquet"],
      biTools: ["Power BI", "Tableau"],
      dataConcepts: ["Data Warehousing", "Data Modeling (Star/Snowflake Schema)", "ETL/ELT", "Data Governance", "Data Quality", "Automation", "Classification"],
      devOpsTools: ["Git", "Docker", "Kubernetes", "Terraform", "CloudFormation", "Jenkins", "Airflow", "Apache Kafka", "Continuous Integration (CI/CD)", "Splunk", "New Relic"],
      projectManagement: ["JIRA", "Confluence", "Microsoft Project", "Agile"],
      other: ["Advanced Excel", "Linux/Unix", "Operating Systems", "Networking", "Debugging", "Unit Test", "Microservices", "Machine Learning", "Problem Solving", "Teamwork", "Process Improvement", "Information Systems", "Distributed Systems", "Communication", "Atlassian", "Process Optimization", "PaaS", "Migration", "Fintech", "Finance", "Data Strategy", "Data Analytics", "Best Practices", "Algorithms", "Backend", "Full Stack", "AI", "5G", "Web", "Vision", "Validation", "Strategy", "SOAP", "REST", "Release", "Leadership", "Integration", "Innovation", "Growth", "Execution", "Entrepreneurial", "Conversion", "Consulting", "Application", "Statistics"]
    },
    projects: [
      {
        id: 1,
        title: "Azure Data Factory & Synapse ETL Pipelines (United HealthCare)",
        description: "Built scalable ETL pipelines using Azure Data Factory and Synapse Analytics to automate agent certification data processing, resulting in a 40% reduction in onboarding time and improved SLA adherence for a major insurance client.",
        tech: ["Azure Data Factory", "Synapse Analytics", "ETL", "SQL"],
        link: "#",
        github: "https://github.com/MOHAMMEDPAYAZ",
        image: "https://placehold.co/400x250/334155/FFFFFF?text=Azure+ETL"
      },
      {
        id: 2,
        title: "Python & ADLS Automation for Certification Renewal (United HealthCare)",
        description: "Automated certification renewal checks using Python and ADLS based on expiry dates, reducing manual effort by 95% and ensuring continuous regulatory compliance for a large insurance onboarding system.",
        tech: ["Python", "Azure Data Lake Storage (ADLS)", "Automation"],
        link: "#",
        github: "https://github.com/MOHAMMEDPAYAZ",
        image: "https://placehold.co/400x250/334155/FFFFFF?text=Python+Automation"
      },
      {
        id: 3,
        title: "Real-time Power BI Dashboards (United HealthCare)",
        description: "Developed real-time Power BI dashboards for service teams to track certification expirations and KPIs, reducing late renewals by 30% and enhancing compliance visibility across departments.",
        tech: ["Power BI", "Data Visualization", "KPIs"],
        link: "#",
        github: "https://github.com/MOHAMMEDPAYAZ",
        image: "https://placehold.co/400x250/334155/FFFFFF?text=PowerBI+Dashboard"
      },
      {
        id: 4,
        title: "Databricks & Delta Lake Unified Reporting Platform (United HealthCare)",
        description: "Integrated siloed insurance datasets using Databricks and Delta Lake, building a unified reporting platform that reduced manual data consolidation efforts by 60% and enabled cross-functional analytics through Power BI.",
        tech: ["Databricks", "Delta Lake", "Data Integration", "Power BI"],
        link: "#",
        github: "https://github.com/MOHAMMEDPAYAZ",
        image: "https://placehold.co/400x250/334155/FFFFFF?text=Databricks+Platform"
      },
      {
        id: 5,
        title: "AWS Glue & Python ETL for Telecom Data (AT&T)",
        description: "Designed scalable ETL pipelines using AWS Glue and Python to process over 5TB of telecom network data monthly, integrating records from call centers, CRM, and billing systems into a centralized analytics platform on Amazon Redshift.",
        tech: ["AWS Glue", "Python", "ETL", "Amazon Redshift"],
        link: "#",
        github: "https://github.com/MOHAMMEDPAYAZ",
        image: "https://placehold.co/400x250/334155/FFFFFF?text=AWS+ETL"
      },
      {
        id: 6,
        title: "Airflow Workflow Orchestration (AT&T)",
        description: "Orchestrated and monitored end-to-end data workflows using Airflow, improving pipeline reliability and simplifying error tracking with automated retries and alerting.",
        tech: ["Airflow", "Workflow Orchestration", "Data Pipelines"],
        link: "#",
        github: "https://github.com/MOHAMMEDPAYAZ",
        image: "https://placehold.co/400x250/334155/FFFFFF?text=Airflow+Orchestration"
      },
      {
        id: 7,
        title: "Sales Data Analysis & Reporting Automation (Academic/Personal Project)",
        description: "Developed a system to collect and process sales records from SQL, Excel, and CRM databases. Analyzed data to identify correlations between sales activities and revenue, delivering real-time insights through Power BI dashboards that contributed to a 10% increase in quarterly revenue.",
        tech: ["SQL", "Excel", "CRM", "Power BI", "Data Analysis"],
        link: "#",
        github: "https://github.com/MOHAMMEDPAYAZ",
        image: "https://placehold.co/400x250/334155/FFFFFF?text=Sales+Analysis"
      },
      {
        id: 8,
        title: "Health Insurance Claims Data Analysis & Reporting Optimization (Academic/Personal Project)",
        description: "Created a model to classify and extract information from health insurance claims data, supporting novel analytical tasks. Utilized Tableau to build automated dashboards, shortening claims resolution time by 25% and enhancing reporting accuracy by 30% through the identification of trends and anomalies.",
        tech: ["Tableau", "Data Classification", "Claims Data", "Reporting"],
        link: "#",
        github: "https://github.com/MOHAMMEDPAYAZ",
        image: "https://placehold.co/400x250/334155/FFFFFF?text=Claims+Analysis"
      }
    ],
    contact: {
      email: "md.payaz8@gmail.com",
      linkedin: "https://www.linkedin.com/in/mohammed-payaz/",
      github: "https://github.com/MOHAMMEDPAYAZ",
      twitter: ""
    }
  };

  // Helper function to render content based on currentPage (if using multi-page)
  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            {/* Hero Section */}
            <section id="home" className="min-h-[calc(100vh-80px)] flex items-center justify-center text-white text-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto py-20">
                <p className="text-xl sm:text-2xl font-light mb-4 animate-fade-in-down">Hello, I'm</p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 animate-fade-in-down">
                  {portfolioData.name}
                </h1>
                <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-6 animate-fade-in-up">
                  {portfolioData.title}
                </h2>
                <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up">
                  {portfolioData.tagline}
                </p>
                <div className="flex justify-center space-x-6 mb-10 animate-fade-in-up">
                  <a
                    href={portfolioData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5V8zm7.982 0h-4.968v16h4.969v-8.399c0-4.172 5.07-3.939 5.07-8.186v.001h-5.07z" />
                    </svg>
                  </a>
                  <a
                    href={portfolioData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.165 6.839 9.485.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.89 1.529 2.341 1.088 2.91.83.091-.644.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.945 0-1.09.39-1.984 1.03-2.68a3.57 3.57 0 01.1-2.642s.83-.268 2.725 1.025c.79-.22 1.63-.33 2.47-.33.84 0 1.68.11 2.47.33 1.894-1.293 2.725-1.025 2.725-1.025.068.79.28 1.808.1 2.642.64.696 1.03 1.59 1.03 2.68 0 3.843-2.339 4.686-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.013 2.419-.013 2.747 0 .268.18.577.688.484C20.137 20.165 23 16.419 23 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                    </svg>
                  </a>
                  {portfolioData.contact.twitter && (
                    <a
                      href={portfolioData.contact.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.46 6c-.77.344-1.6.577-2.46.68.88-.53 1.56-1.37 1.88-2.37-.83.49-1.75.84-2.73 1.02C18.3 3.5 17.2 3 16 3c-2.35 0-4.27 1.92-4.27 4.29 0 .33.04.65.12.96C7.79 8.29 4.17 6.31 1.7 3.25c-.37.64-.58 1.39-.58 2.19 0 1.49.75 2.81 1.88 3.59-.69-.02-1.34-.21-1.91-.53v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.54 1.7 2.11 2.93 3.97 2.96C9.1 19.5 7.15 20 5 20c-.33 0-.66-.02-.98-.06C4.85 20.57 7 21 9.25 21c7.55 0 11.67-6.25 11.67-11.67 0-.18-.01-.37-.01-.55.8-.58 1.49-1.3 2.04-2.13z" />
                      </svg>
                    </a>
                  )}
                </div>
                <a
                  href={portfolioData.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
                >
                  Download Resume
                </a>
              </div>
            </section>

            {/* About Me Section */}
            <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold text-center text-blue-400 mb-12">About Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                  <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                    <img
                      src={portfolioData.about.profilePic}
                      alt="Profile"
                      className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-blue-400 shadow-xl"
                      onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x300/1a202c/FFFFFF?text=Payaz"; }}
                    />
                  </div>
                  <div className="md:w-2/3 text-lg leading-relaxed space-y-6">
                    {portfolioData.about.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}

                    {/* Education Subsection */}
                    {portfolioData.about.education && portfolioData.about.education.length > 0 && (
                      <>
                        <h3 className="text-3xl font-semibold text-blue-300 mt-10 mb-6">Education</h3>
                        <ul className="list-disc list-inside space-y-2">
                          {portfolioData.about.education.map((edu, index) => (
                            <li key={index} className="text-gray-300">{edu}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    {/* Certifications Subsection */}
                    {portfolioData.about.certifications && portfolioData.about.certifications.length > 0 && (
                      <>
                        <h3 className="text-3xl font-semibold text-blue-300 mt-10 mb-6">Certifications</h3>
                        <ul className="list-disc list-inside space-y-2">
                          {portfolioData.about.certifications.map((cert, index) => (
                            <li key={index} className="text-gray-300">{cert}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    {/* Skills Subsection */}
                    <h3 className="text-3xl font-semibold text-blue-300 mt-10 mb-6">My Skills</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-blue-200">Languages</h4>
                        <div className="flex flex-wrap gap-3">
                          {portfolioData.skills.languages.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-gray-700 text-gray-200 text-md font-medium px-4 py-2 rounded-full shadow-md hover:bg-gray-600 transition duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-blue-200">Cloud Platforms</h4>
                        <div className="flex flex-wrap gap-3">
                          {portfolioData.skills.cloudPlatforms.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-gray-700 text-gray-200 text-md font-medium px-4 py-2 rounded-full shadow-md hover:bg-gray-600 transition duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-blue-200">Databases</h4>
                        <div className="flex flex-wrap gap-3">
                          {portfolioData.skills.databases.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-gray-700 text-gray-200 text-md font-medium px-4 py-2 rounded-full shadow-md hover:bg-gray-600 transition duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-blue-200">Big Data & Tools</h4>
                        <div className="flex flex-wrap gap-3">
                          {portfolioData.skills.bigDataTools.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-gray-700 text-gray-200 text-md font-medium px-4 py-2 rounded-full shadow-md hover:bg-gray-600 transition duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-blue-200">BI Tools</h4>
                        <div className="flex flex-wrap gap-3">
                          {portfolioData.skills.biTools.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-gray-700 text-gray-200 text-md font-medium px-4 py-2 rounded-full shadow-md hover:bg-gray-600 transition duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-blue-200">Data Concepts & Methodologies</h4>
                        <div className="flex flex-wrap gap-3">
                          {portfolioData.skills.dataConcepts.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-gray-700 text-gray-200 text-md font-medium px-4 py-2 rounded-full shadow-md hover:bg-gray-600 transition duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-blue-200">DevOps & Orchestration</h4>
                        <div className="flex flex-wrap gap-3">
                          {portfolioData.skills.devOpsTools.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-gray-700 text-gray-200 text-md font-medium px-4 py-2 rounded-full shadow-md hover:bg-gray-600 transition duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-blue-200">Project Management</h4>
                        <div className="flex flex-wrap gap-3">
                          {portfolioData.skills.projectManagement.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-gray-700 text-gray-200 text-md font-medium px-4 py-2 rounded-full shadow-md hover:bg-gray-600 transition duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-blue-200">Other Skills</h4>
                        <div className="flex flex-wrap gap-3">
                          {portfolioData.skills.other.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-gray-700 text-gray-200 text-md font-medium px-4 py-2 rounded-full shadow-md hover:bg-gray-600 transition duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white">
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 mb-12">My Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
                  {portfolioData.projects.map((project) => (
                    <div key={project.id} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-60 object-cover"
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/334155/FFFFFF?text=Project+Image"; }}
                      />
                      <div className="p-6">
                        <h3 className="text-3xl font-semibold text-blue-300 mb-3">{project.title}</h3>
                        <p className="text-gray-300 mb-5 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6 justify-center">
                          {project.tech.map((tech, idx) => (
                            <span key={idx} className="bg-blue-600 text-white text-sm px-4 py-1 rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-center space-x-6">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-200 font-medium flex items-center transition-colors duration-300"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                            Live Demo
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-200 font-medium flex items-center transition-colors duration-300"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.165 6.839 9.485.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.89 1.529 2.341 1.088 2.91.83.091-.644.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.945 0-1.09.39-1.984 1.03-2.68a3.57 3.57 0 01.1-2.642s.83-.268 2.725 1.025c.79-.22 1.63-.33 2.47-.33.84 0 1.68.11 2.47.33 1.894-1.293 2.725-1.025 2.725-1.025.068.79.28 1.808.1 2.642.64.696 1.03 1.59 1.03 2.68 0 3.843-2.339 4.686-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.013 2.419-.013 2.747 0 .268.18.577.688.484C20.137 20.165 23 16.419 23 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                            </svg>
                            GitHub
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 mb-12">Get In Touch</h2>
                <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                  I'm always open to new opportunities, collaborations, and interesting conversations. Feel free to reach out!
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-12">
                  <a
                    href={`mailto:${portfolioData.contact.email}`}
                    className="flex items-center text-blue-400 hover:text-blue-200 font-medium text-xl transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {portfolioData.contact.email}
                  </a>
                  <a
                    href={portfolioData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-200 font-medium text-xl transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5V8zm7.982 0h-4.968v16h4.969v-8.399c0-4.172 5.07-3.939 5.07-8.186v.001h-5.07z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href={portfolioData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-200 font-medium text-xl transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.165 6.839 9.485.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.89 1.529 2.341 1.088 2.91.83.091-.644.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.945 0-1.09.39-1.984 1.03-2.68a3.57 3.57 0 01.1-2.642s.83-.268 2.725 1.025c.79-.22 1.63-.33 2.47-.33.84 0 1.68.11 2.47.33 1.894-1.293 2.725-1.025 2.725-1.025.068.79.28 1.808.1 2.642.64.696 1.03 1.59 1.03 2.68 0 3.843-2.339 4.686-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.013 2.419-.013 2.747 0 .268.18.577.688.484C20.137 20.165 23 16.419 23 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </section>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 font-inter antialiased"> {/* Darker background */}
      {/* Tailwind CSS CDN - Ensure this is loaded */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Font Inter */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      {/* Custom styles for animations */}
      <style>
        {`
        body {
          scroll-behavior: smooth; /* Smooth scrolling for anchor links */
        }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          animation-delay: 0.2s; /* Delay for a staggered effect */
        }
        .shadow-lg {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .rounded-lg {
          border-radius: 0.5rem;
        }
        .rounded-full {
          border-radius: 9999px;
        }
        `}
      </style>

      {/* Header/Navigation */}
      <header className="bg-gray-900 shadow-md py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 rounded-b-lg">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            <a href="#home" className="hover:text-blue-400 transition duration-300">{portfolioData.name}</a>
          </div>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="text-gray-300 hover:text-blue-400 font-medium transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-300 hover:text-blue-400 font-medium transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-300 hover:text-blue-400 font-medium transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-300 hover:text-blue-400 font-medium transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto"> {/* Wider main content area */}
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 text-center rounded-t-lg mt-12">
        <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5V8zm7.982 0h-4.968v16h4.969v-8.399c0-4.172 5.07-3.939 5.07-8.186v.001h-5.07z" />
            </svg>
          </a>
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.165 6.839 9.485.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.89 1.529 2.341 1.088 2.91.83.091-.644.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.945 0-1.09.39-1.984 1.03-2.68a3.57 3.57 0 01.1-2.642s.83-.268 2.725 1.025c.79-.22 1.63-.33 2.47-.33.84 0 1.68.11 2.47.33 1.894-1.293 2.725-1.025 2.725-1.025.068.79.28 1.808.1 2.642.64.696 1.03 1.59 1.03 2.68 0 3.843-2.339 4.686-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.013 2.419-.013 2.747 0 .268.18.577.688.484C20.137 20.165 23 16.419 23 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
          </a>
          {portfolioData.contact.twitter && (
            <a
              href={portfolioData.contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 6c-.77.344-1.6.577-2.46.68.88-.53 1.56-1.37 1.88-2.37-.83.49-1.75.84-2.73 1.02C18.3 3.5 17.2 3 16 3c-2.35 0-4.27 1.92-4.27 4.29 0 .33.04.65.12.96C7.79 8.29 4.17 6.31 1.7 3.25c-.37.64-.58 1.39-.58 2.19 0 1.49.75 2.81 1.88 3.59-.69-.02-1.34-.21-1.91-.53v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.54 1.7 2.11 2.93 3.97 2.96C9.1 19.5 7.15 20 5 20c-.33 0-.66-.02-.98-.06C4.85 20.57 7 21 9.25 21c7.55 0 11.67-6.25 11.67-11.67 0-.18-.01-.37-.01-.55.8-.58 1.49-1.3 2.04-2.13z" />
              </svg>
            </a>
          )}
        </div>
      </footer>
    </div>
  );
};

export default App;
 

import React, { useState, useEffect } from 'react';
import Styles from './card.module.css';
import CardDetails from '../CardDetails/CardDetail';
import CommonModalStyles from '../CardDetails/cardDetails.module.css';

function Card({ individualData }) {
  const [openModel, setOpenModel] = useState(false);
  const [test, setTest] = useState(false);
  const {
    projectTitle,
    projectTechnologies,
    technicalSkillSetFrontend,
    technicalSkillSetBackend,
    technicalSkillSetDatabases,
    technicalSkillSetInfrastructure,
  } = individualData;

  useEffect(() => {
    if (test) {
      setTest(false);
      setOpenModel(false);
    }
  }, [test]);

  function renderData(data) {
    if (data) {
      return data;
    }
    return '-';
  }

  const handleClose = () => {
    setTest(true);
  };

  return (
    <div
      className={Styles.cardWrapper}
      onClick={() => {
        setOpenModel(true);
      }}
    >
      {openModel ? (
        <CardDetails
          open={openModel}
          data={individualData}
          handleClose={handleClose}
        />
      ) : (
        ''
      )}
      <div className={Styles.card}>
        <div className="card-body">
          {/* Project title */}
          <p className={CommonModalStyles.modelTitle}>Title</p>
          <p className={CommonModalStyles.subText}>
            {projectTitle}
          </p>

          {/* Project Technologies */}
          <p className={CommonModalStyles.modelTitle}>Project.Technologies</p>
          <p className={CommonModalStyles.subText}>
            {projectTechnologies}
          </p>

          {/* Technical skill-set Frontend */}
          <p className={CommonModalStyles.modelTitle}>
            Technical_Skillset.Frontend
          </p>
          <p className={CommonModalStyles.subText}>
            {renderData(technicalSkillSetFrontend)}
          </p>

          {/* Technical skill-set Backend */}
          <p className={CommonModalStyles.modelTitle}>
            Technical_Skillset.Backend
          </p>
          <p className={CommonModalStyles.subText}>
            {renderData(technicalSkillSetBackend)}
          </p>

          {/* Technical skill-set Databases */}
          <p className={CommonModalStyles.modelTitle}>
            Technical_Skillset.Databases
          </p>
          <p className={CommonModalStyles.subText}>
            {renderData(technicalSkillSetDatabases)}
          </p>

          {/* Technical skill-set Infrastructure */}
          <p className={CommonModalStyles.modelTitle}>
            Project.Technical_Skillset.Infrastructure
          </p>
          <p className={CommonModalStyles.subText}>
            {renderData(technicalSkillSetInfrastructure)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;

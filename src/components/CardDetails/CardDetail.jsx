import { Box, Modal } from '@mui/material';
import React from 'react';
import CommonModalStyles from './cardDetails.module.css';
import { Close } from '@mui/icons-material';

function ModalWrap({ open, data, handleClose }) {
  const {
    projectTitle,
    projectTechnologies,
    technicalSkillSetFrontend,
    technicalSkillSetBackend,
    technicalSkillSetDatabases,
    technicalSkillSetInfrastructure,
  } = data;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        '& .MuiBackdrop-root': {
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          color: 'rgba(255, 255, 255, 0.5)'
        },
      }}
    >
      <Box className={CommonModalStyles.modal_box}>
        {/* added a custom height here as we are using css from a common css file */}
        <div className={CommonModalStyles.modal_main}>
          <Close
            onClick={() => {
              handleClose();
            }}
            id={CommonModalStyles.close_icon}
          />
          <div id={CommonModalStyles.titleWrapper}>
            <h4 id={CommonModalStyles.mainTitle}>{projectTitle}</h4>
          </div>
          <div>
            <p className={CommonModalStyles.modelTitle}>🄰🄱🄲 Title</p>
            <p className={CommonModalStyles.subText}>{projectTitle}</p>
          </div>
          <div>
            <p className={CommonModalStyles.modelTitle}>
              🄰🄱🄲 Project.Technologies
            </p>
            <p className={CommonModalStyles.subText}>{projectTechnologies}</p>
          </div>
          <div>
            <p className={CommonModalStyles.modelTitle}>
              🄰🄱🄲 Technical_Skillset.Frontend
            </p>
            <p className={CommonModalStyles.subText}>
              {technicalSkillSetFrontend}
            </p>
          </div>
          <div>
            <p className={CommonModalStyles.modelTitle}>
              🄰🄱🄲 Technical_Skillset.Backend
            </p>
            <p className={CommonModalStyles.subText}>
              {technicalSkillSetBackend}
            </p>
          </div>
          <div>
            <p className={CommonModalStyles.modelTitle}>
              🄰🄱🄲 Technical_Skillset.Databases
            </p>
            <p className={CommonModalStyles.subText}>
              {technicalSkillSetDatabases}
            </p>
          </div>
          <div>
            <p className={CommonModalStyles.modelTitle}>
              Technical_Skillset.Infrastructure
            </p>
            <p className={CommonModalStyles.subText}>
              {technicalSkillSetInfrastructure}
            </p>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export default ModalWrap;

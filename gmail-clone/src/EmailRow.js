import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react';
import './EmailRow.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

function EmailRow({title, subject, description, time}) {
  return (
    <div className='emailRow'>
      <div className='emailRow__options'>
        <Checkbox />

        <IconButton>
          <StarBorderIcon />
        </IconButton>

        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>

      <div className='emailRow__title'>

      </div>

      <div className='emailRow__message'>

      </div>

      <div className='emailRow__description'>

      </div>
    </div>
  )
}

export default EmailRow

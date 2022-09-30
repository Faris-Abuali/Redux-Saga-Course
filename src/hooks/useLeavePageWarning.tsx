import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

type Props = {}

const useLeavePageWarning = (message: string = "Are you sure you want to leave this page?") => {
  const [isDirty, setDirty] = useState(false);

  useEffect(() => {
    // Detecting browser tab closing
    window.onbeforeunload = isDirty ? (() => message) : null;

    return () => {
      window.onbeforeunload = null;
    }
  }, [isDirty]);

  return [() => setDirty(true), () => setDirty(false)];
}

export default useLeavePageWarning
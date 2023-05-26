import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import Legal from "./components/Legal/Legal";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Welcome from "./components/Welcome/Welcome";
import AuthLayout from "./containers/AuthLayout/AuthLayout";
import DashboardLayout from "./containers/DashboardLayout/DashboardLayout";
import NotFound from "./components/NotFound/NotFound";
import CreateRecoveryPhrase from "./components/CreateRecoveryPhrase/CreateRecoveryPhrase";
import CreateRecoveryPhraseManualBackup from "./components/CreateRecoveryPhrase/CreateRecoveryPhraseManualBackup";
import LoginRecoveryPhrase from "./components/LoginRecoveryPhrase/LoginRecoveryPhrase";
import Register from "./components/Register/Register";
import Receive from "./components/Receive/Receive";

const BaseRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Welcome />} />
        <Route path="legal" element={<Legal />} />
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="recovery-phrase" element={<CreateRecoveryPhrase />} />
        <Route
          path="manual-backup"
          element={<CreateRecoveryPhraseManualBackup />}
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="login-recovery-phrase" element={<LoginRecoveryPhrase />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="receive" element={<Receive />} />
      </Route>
    </Routes>
  );
};

export default BaseRouter;

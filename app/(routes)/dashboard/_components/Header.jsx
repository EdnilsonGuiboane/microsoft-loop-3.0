"use client";

import {
  OrganizationSwitcher,
  useAuth,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import React, { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../config/firebaseConfig";
import Logo from "../../../_components/Logo";

const Header = () => {
  const { orgId } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    user && saveUserData();
  }, [user]);

  /**Serve para guardar dados do usuario */
  const saveUserData = async () => {
    const docId = user?.primaryEmailAddress?.emailAddress;
    try {
      await setDoc(doc(db, "LoopUsers", docId), {
        name: user?.fullName,
        avatar: user?.imageUrl,
        email: user?.primaryEmailAddress?.emailAddress,
      });
    } catch (e) {}
  };

  return (
    <div className="flex justify-between items-center p-3 shadow-sm">
      <Logo />
      <OrganizationSwitcher
        afterLeaveOrganizationUrl={"/dashboard"}
        afterCreateOrganizationUrl={"/dashboard"}
      />
      <UserButton />
    </div>
  );
};

export default Header;

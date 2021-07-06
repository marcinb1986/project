import React, { FC } from "react";
import { View } from "react-native";
import { Profil } from "../wiecej/components/Profil/profil";
import { Premium } from "./components/Premium/premium";
import { MojeOgloszenia } from "./components/MojeOgloszenia/mojeOgloszenia";
import { MojeAkcje } from "./components/MojeAkcje/mojeAkcje";
import { Kontakt } from "./components/Kontakt/kontakt";
import { Wrapper } from "../../components/wrapper/wrapper";

// interface WiecejProps {};

export const Wiecej = ({}) => {
  return (
    <Wrapper>
      <Profil />
      <MojeOgloszenia />
      <MojeAkcje />
      <Premium />
      <Kontakt />
    </Wrapper>
  );
};

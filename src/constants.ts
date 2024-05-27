import * as bcrypt from "bcrypt";

export const jwtConstants = {
  secret: process.env.JWT_KEY || "DUMMY_CONSTANT",
};

export const saltOrRoundsConstant = 12;
export const saltConstant = bcrypt.genSaltSync(saltOrRoundsConstant);

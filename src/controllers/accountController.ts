import { Request, Response } from "express";
import { getFilteredAccounts } from "../services/accountService";

export const list = async ({ query }: Request, res: Response) => {
  if (Object.keys(query).length === 0)
    return res.status(400).json("Bad request");

  const filteredAccounts = getFilteredAccounts(query);
  return res.status(200).json(filteredAccounts);
};

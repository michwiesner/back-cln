import fs from "fs";
import { IAccount, IBranch, IQuery, ITag } from "../interfacesAndTypes/account";

const getAccountsByTag = (filterByTag: string, accounts: IAccount[]) =>
  accounts.filter((account) =>
    account.tags.find(
      (tag: ITag) => tag.name.toLowerCase() === filterByTag.toLowerCase()
    )
  );

const getAccountByHaveVoucher = (haveVoucher: string, accounts: IAccount[]) =>
  accounts.filter((account) => account.haveVoucher === Boolean(haveVoucher));

const ordersAccountsByName = (accounts: IAccount[]) =>
  accounts.sort(({ name }, { name: nameToCompare }) => {
    
    if (name < nameToCompare) return -1;

    if (name > nameToCompare) return 1;

    return 0;
  });

const reduceByDistance = (branches: IBranch[]) =>
  branches.reduce(
    (accum: IBranch, branch: IBranch) =>
      accum.location < branch.location ? accum : branch,
    {} as IBranch
  );

const orderAccountsByDistance = (accounts: IAccount[]) =>
  accounts.sort(({ branches: branchesA }, { branches: branchesB }) => {
    const branchA = reduceByDistance(branchesA);
    const branchB = reduceByDistance(branchesB);

    if (branchA.location < branchB.location) return -1;

    if (branchA.location > branchB.location) return 1;

    return 0;
  });

const paginateAccounts = (
  accounts: IAccount[],
  page?: number,
  limit?: number
) => {
  const validPage = page && page > 0 ? page : 1;
  const validLimit = limit && limit > 0 ? limit : 4;
  const startIndex = (validPage - 1) * validLimit;
  const endIndex = validPage * validLimit;

  return accounts.slice(startIndex, endIndex);
};

export const getAccounts = () =>
  JSON.parse(fs.readFileSync("./src/files/accounts.json", "utf-8"));

export const getFilteredAccounts = (query: any) => {
  const { orderBy, filterByTag, haveVoucher, page, limit }: IQuery = query;
  const { accounts }: { accounts: IAccount[] } = getAccounts();

  let filteredAccounts = accounts;
  if (filterByTag)
    filteredAccounts = getAccountsByTag(filterByTag, filteredAccounts);
  if (haveVoucher)
    filteredAccounts = getAccountByHaveVoucher(haveVoucher, filteredAccounts);
  if (orderBy === "name")
    filteredAccounts = ordersAccountsByName(filteredAccounts);
  if (orderBy === "distance")
    filteredAccounts = orderAccountsByDistance(filteredAccounts);
  if (page || limit)
    filteredAccounts = paginateAccounts(filteredAccounts, page, limit);

  return filteredAccounts;
};

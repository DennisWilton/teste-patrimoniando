export enum MemberType {
  Common = 0,
  Silver = 1,
  SilverPlus = 2,
  Gold = 3,
  GoldPlus = 4,
  Platinum = 5,
  PlatinumPlus = 6,
  Diamond = 7,
  DiamondPlus = 8,
  Elite = 9,
}

export const MemberTypeLabel = {
  [MemberType.Common]: 'Membro Comum',
  [MemberType.Silver]: 'Membro Prata',
  [MemberType.SilverPlus]: 'Membro Prata PLUS',
  [MemberType.Gold]: 'Membro Ouro',
  [MemberType.GoldPlus]: 'Membro Ouro PLUS',
  [MemberType.Platinum]: 'Membro Platina',
  [MemberType.PlatinumPlus]: 'Membro Platina PLUS',
  [MemberType.Diamond]: 'Membro Diamante',
  [MemberType.DiamondPlus]: 'Membro Diamante PLUS',
  [MemberType.Elite]: 'Membro Elite',
} as const;

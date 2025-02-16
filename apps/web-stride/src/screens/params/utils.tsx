import type {
  Distribution,
  Gov,
  Minting,
  Slashing,
  Stakeibc,
  Staking,
} from '@/screens/params/types';
import { nanoToSeconds, secondsToDays } from '@/utils/time';
import { TFunction } from 'next-i18next';
import numeral from 'numeral';

const convertBySeconds = (seconds: number, t: TFunction) => {
  const SECONDS_IN_DAY = 86400;
  return seconds >= SECONDS_IN_DAY
    ? t('days', {
        day: secondsToDays(seconds),
      })
    : t('seconds', {
        second: seconds,
      });
};

export const formatStaking = (data: Staking, t: TFunction) => [
  {
    key: 'bondDenom',
    label: t('bondDenom'),
    detail: data.bondDenom,
  },
  {
    key: 'unbondingTime',
    label: t('unbondingTime'),
    detail: convertBySeconds(nanoToSeconds(data.unbondingTime), t),
  },
  {
    key: 'maxEntries',
    label: t('maxEntries'),
    detail: numeral(data.maxEntries).format('0,0'),
  },
  {
    key: 'historicalEntries',
    label: t('historicalEntries'),
    detail: numeral(data.historicalEntries).format('0,0'),
  },
  {
    key: 'maxValidators',
    label: t('maxValidators'),
    detail: numeral(data.maxValidators).format('0,0'),
  },
];

export const formatSlashing = (data: Slashing, t: TFunction) => [
  {
    key: 'downtimeJailDuration',
    label: t('downtimeJailDuration'),
    detail: t('seconds', {
      second: numeral(nanoToSeconds(data.downtimeJailDuration)).format('0,0'),
    }),
  },
  {
    key: 'minSignedPerWindow',
    label: t('minSignedPerWindow'),
    detail: `${numeral(data.minSignedPerWindow * 100).format('0.[00]')}%`,
  },
  {
    key: 'signedBlockWindow',
    label: t('signedBlockWindow'),
    detail: numeral(data.signedBlockWindow).format('0,0'),
  },
  {
    key: 'slashFractionDoubleSign',
    label: t('slashFractionDoubleSign'),
    detail: `${data.slashFractionDoubleSign * 100} / 100`,
  },
  {
    key: 'slashFractionDowntime',
    label: t('slashFractionDowntime'),
    detail: `${data.slashFractionDowntime * 10000} / ${numeral(10000).format('0,0')}`,
  },
];

export const formatMinting = (data: Minting, t: TFunction) => [
  {
    key: 'blocksPerYear',
    label: t('blocksPerYear'),
    detail: numeral(data.blocksPerYear).format('0,0'),
  },
  {
    key: 'goalBonded',
    label: t('goalBonded'),
    detail: `${numeral(data.goalBonded * 100).format('0.[00]')}%`,
  },
  {
    key: 'inflationMax',
    label: t('inflationMax'),
    detail: `${numeral(data.inflationMax * 100).format('0.[00]')}%`,
  },
  {
    key: 'inflationMin',
    label: t('inflationMin'),
    detail: `${numeral(data.inflationMin * 100).format('0.[00]')}%`,
  },
  {
    key: 'inflationRateChange',
    label: t('inflationRateChange'),
    detail: `${numeral(data.inflationRateChange * 100).format('0.[00]')}%`,
  },
  {
    key: 'mintDenom',
    label: t('mintDenom'),
    detail: data.mintDenom,
  },
];

export const formatDistribution = (data: Distribution, t: TFunction) => [
  {
    key: 'baseProposerReward',
    label: t('baseProposerReward'),
    detail: `${numeral(data.baseProposerReward * 100).format('0.[00]')}%`,
  },
  {
    key: 'bonusProposerReward',
    label: t('bonusProposerReward'),
    detail: `${numeral(data.bonusProposerReward * 100).format('0.[00]')}%`,
  },
  {
    key: 'communityTax',
    label: t('communityTax'),
    detail: `${numeral(data.communityTax * 100).format('0.[00]')}%`,
  },
  {
    key: 'withdrawAddressEnabled',
    label: t('withdrawAddressEnabled'),
    detail: `${data.withdrawAddressEnabled}`.toUpperCase(),
  },
];

export const formatGov = (data: Gov, t: TFunction) => [
  {
    key: 'minDeposit',
    label: t('minDeposit'),
    detail: `${data.minDeposit.value} ${data.minDeposit.displayDenom.toUpperCase()}`,
  },
  {
    key: 'maxDepositPeriod',
    label: t('maxDepositPeriod'),
    detail: convertBySeconds(nanoToSeconds(data.maxDepositPeriod), t),
  },
  {
    key: 'quorum',
    label: t('quorum'),
    detail: `${numeral(data.quorum * 100).format('0.[00]')}%`,
  },
  {
    key: 'threshold',
    label: t('threshold'),
    detail: `${numeral(data.threshold * 100).format('0.[00]')}%`,
  },
  {
    key: 'vetoThreshold',
    label: t('vetoThreshold'),
    detail: `${numeral(data.vetoThreshold * 100).format('0.[00]')}%`,
  },
  {
    key: 'votingPeriod',
    label: t('votingPeriod'),
    detail: convertBySeconds(nanoToSeconds(data.votingPeriod), t),
  },
];

export const formatStakeibc = (data: Stakeibc, t: TFunction) => [
  {
    key: 'bufferSize',
    label: t('bufferSize'),
    detail: data.bufferSize,
  },
  {
    key: 'depositInterval',
    label: t('depositInterval'),
    detail: data.depositInterval,
  },
  {
    key: 'rewardsInterval',
    label: t('rewardsInterval'),
    detail: data.rewardsInterval,
  },
  {
    key: 'delegateInterval',
    label: t('delegateInterval'),
    detail: data.delegateInterval,
  },
  {
    key: 'icaTimeoutNanos',
    label: t('icaTimeoutNanos'),
    detail: convertBySeconds(nanoToSeconds(data.icaTimeoutNanos), t),
  },
  {
    key: 'reinvestInterval',
    label: t('reinvestInterval'),
    detail: data.reinvestInterval,
  },
  {
    key: 'strideCommission',
    label: t('strideCommission'),
    detail: data.strideCommission,
  },
  {
    key: 'ibcTimeoutBlocks',
    label: t('ibcTimeoutBlocks'),
    detail: data.ibcTimeoutBlocks,
  },
  {
    key: 'redemptionRateInterval',
    label: t('redemptionRateInterval'),
    detail: data.redemptionRateInterval,
  },
  {
    key: 'feeTransferTimeoutNanos',
    label: t('feeTransferTimeoutNanos'),
    detail: convertBySeconds(nanoToSeconds(data.feeTransferTimeoutNanos), t),
  },
  {
    key: 'ibcTransferTimeoutNanos',
    label: t('ibcTransferTimeoutNanos'),
    detail: convertBySeconds(nanoToSeconds(data.ibcTransferTimeoutNanos), t),
  },
  {
    key: 'maxStakeIcaCallsPerEpoch',
    label: t('maxStakeIcaCallsPerEpoch'),
    detail: data.maxStakeIcaCallsPerEpoch,
  },
  {
    key: 'validatorRebalancingThreshold',
    label: t('validatorRebalancingThreshold'),
    detail: `${numeral(data.safetyMaxRedemptionRateThreshold * 100).format('0.[00]')}%`,
  },
  {
    key: 'safetyMaxRedemptionRateThreshold',
    label: t('safetyMaxRedemptionRateThreshold'),
    detail: `${numeral(data.safetyMaxRedemptionRateThreshold * 100).format('0.[00]')}%`,
  },
  {
    key: 'safetyMinRedemptionRateThreshold',
    label: t('safetyMinRedemptionRateThreshold'),
    detail: `${numeral(data.safetyMinRedemptionRateThreshold * 100).format('0.[00]')}%`,
  },
];

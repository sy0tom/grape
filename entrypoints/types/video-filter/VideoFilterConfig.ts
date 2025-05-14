import { UIconst } from "#/constants";
import { Filter } from "./VideoFilterSettings";

export type OptionFilterConfig = {
  mediaFilter?: Filter;
  qualityFilter: Filter;
  priceFilter: Filter;
  releaseFilter?: Filter;
  sortFilter: Filter;
};

const optionAll = { label: "全て", value: " " } as const;

const mediaOption2D = { label: "2D", value: "media_type=2d" } as const;
const mediaOptionVR = { label: "VR", value: "media_type=vr" } as const;

const qualityOptionStreaming = {
  label: "ストリーミング",
  value: "max_quality=various",
} as const;
const qualityOptionDownload = {
  label: "ダウンロード",
  value: "max_quality=sd",
} as const;
const qualityOptionHD = {
  label: "HD版ダウンロード",
  value: "max_quality=hd",
} as const;
const qualityOption4K = {
  label: "4k版ダウンロード",
  value: "max_quality=4k",
} as const;
const qualityOption8K = {
  label: "8KVR版ダウンロード",
  value: "max_quality=8k",
} as const;

const priceOptionMax300 = {
  label: "300円以下",
  value: "price_max=300",
} as const;
const priceOptionMax500 = {
  label: "500円以下",
  value: "price_max=500",
} as const;
const priceOptionMax1000 = {
  label: "1000円以下",
  value: "price_max=1000",
} as const;
const priceOptionMin1001 = {
  label: "1001円以上",
  value: "price_min=1001",
} as const;
const priceOptionMax2000 = {
  label: "2000円以下",
  value: "price_max=2000",
} as const;
const priceOptionMin2001 = {
  label: "2001円以上",
  value: "price_min=2001",
} as const;

const releaseOptionLatest = {
  label: "最新作",
  value: "release=latest",
} as const;
const releaseOptionOld = { label: "準新作", value: "release=recent" } as const;
const releaseOptionReservation = {
  label: "予約",
  value: "release=reservation",
} as const;

const sortOptionSuggest = {
  label: "おすすめ順",
  value: "sort=suggest",
} as const;
const sortOptionRanking = { label: "人気順", value: "sort=ranking" } as const;
const sortOptionSalerankingAsc = {
  label: "売上本数順",
  value: "sort=saleranking_asc",
} as const;
const sortOptionDate = { label: "新着順", value: "sort=date" } as const;
const sortOptionReviewRank = {
  label: "評価の高い順",
  value: "sort=review_rank",
} as const;
const sortOptionBookmarkDesc = {
  label: "お気に入り数順",
  value: "sort=bookmark_desc",
} as const;
const sortOptionPriceAsc = {
  label: "価格の安い順",
  value: "sort=price_asc",
} as const;
const sortOptionReleaseDate = {
  label: "商品発売日順",
  value: "sort=release_date",
} as const;

// AVフィルターの設定
export const avFilterConfig: OptionFilterConfig = {
  mediaFilter: {
    label: UIconst.label.mediaTypeFilter,
    options: [optionAll, mediaOption2D, mediaOptionVR],
  },
  qualityFilter: {
    label: UIconst.label.qualityFilter,
    options: [
      optionAll,
      qualityOptionStreaming,
      qualityOptionDownload,
      qualityOptionHD,
      qualityOption4K,
      qualityOption8K,
    ],
  },
  priceFilter: {
    label: UIconst.label.priceFilter,
    options: [
      optionAll,
      priceOptionMax300,
      priceOptionMax500,
      priceOptionMax1000,
      priceOptionMax2000,
      priceOptionMin2001,
    ],
  },
  releaseFilter: {
    label: UIconst.label.releaseFilter,
    options: [
      optionAll,
      releaseOptionLatest,
      releaseOptionOld,
      releaseOptionReservation,
    ],
  },
  sortFilter: {
    label: UIconst.label.sortFilter,
    options: [
      sortOptionSuggest,
      sortOptionRanking,
      sortOptionSalerankingAsc,
      sortOptionDate,
      sortOptionReviewRank,
      sortOptionBookmarkDesc,
      sortOptionPriceAsc,
      sortOptionReleaseDate,
    ],
  },
} as const;

// 素人フィルターの設定
export const amateurFilterConfig: OptionFilterConfig = {
  qualityFilter: {
    label: UIconst.label.qualityFilter,
    options: [
      optionAll,
      qualityOptionStreaming,
      qualityOptionDownload,
      qualityOptionHD,
      qualityOption4K,
    ],
  },
  priceFilter: {
    label: UIconst.label.priceFilter,
    options: [
      optionAll,
      priceOptionMax300,
      priceOptionMax500,
      priceOptionMax1000,
      priceOptionMin1001,
    ],
  },
  sortFilter: {
    label: UIconst.label.sortFilter,
    options: [
      sortOptionRanking,
      sortOptionSalerankingAsc,
      sortOptionDate,
      sortOptionReviewRank,
      sortOptionBookmarkDesc,
      sortOptionPriceAsc,
    ],
  },
} as const;

// アニメフィルターの設定
export const animeFilterConfig: OptionFilterConfig = {
  qualityFilter: {
    label: UIconst.label.qualityFilter,
    options: [
      optionAll,
      qualityOptionStreaming,
      qualityOptionDownload,
      qualityOptionHD,
    ],
  },
  priceFilter: {
    label: UIconst.label.priceFilter,
    options: [
      optionAll,
      priceOptionMax300,
      priceOptionMax500,
      priceOptionMax1000,
      priceOptionMax2000,
      priceOptionMin2001,
    ],
  },
  sortFilter: {
    label: UIconst.label.sortFilter,
    options: [
      sortOptionRanking,
      sortOptionSalerankingAsc,
      sortOptionDate,
      sortOptionReviewRank,
      sortOptionBookmarkDesc,
      sortOptionPriceAsc,
    ],
  },
} as const;

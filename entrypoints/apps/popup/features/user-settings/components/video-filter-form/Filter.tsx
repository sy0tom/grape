import { filterOptions } from "#/types";

export interface FilterData {
  name?: string;
  mediaType?: string;
  quality?: string;
  price?: string;
  release?: string;
  sort?: string;
  keywords?: string[];
}

interface Props {
  initialValue?: FilterData;
}

export function Filter({ initialValue }: Props) {
  const [formData, setFormData] = useState<FilterData>(initialValue ?? {});
  return (
    <div>
      <div className="flex items-center">
        <label htmlFor="">フィルター名</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="flex items-center gap-1">
        <select
          value={formData.mediaType}
          onChange={(e) =>
            setFormData({ ...formData, mediaType: e.target.value })
          }
        >
          {filterOptions.mediaTypes.map((mediaType) => (
            <option key={mediaType.value} value={mediaType.value}>
              {mediaType.label}
            </option>
          ))}
        </select>
        <select
          value={formData.quality}
          onChange={(e) =>
            setFormData({ ...formData, quality: e.target.value })
          }
        >
          {filterOptions.qualities.map((quality) => (
            <option key={quality.value} value={quality.value}>
              {quality.label}
            </option>
          ))}
        </select>
        <select
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        >
          {filterOptions.prices.map((price) => (
            <option key={price.value} value={price.value}>
              {price.label}
            </option>
          ))}
        </select>
        <select
          value={formData.release}
          onChange={(e) =>
            setFormData({ ...formData, release: e.target.value })
          }
        >
          {filterOptions.releases.map((release) => (
            <option key={release.value} value={release.value}>
              {release.label}
            </option>
          ))}
        </select>
        <select
          value={formData.sort}
          onChange={(e) => setFormData({ ...formData, sort: e.target.value })}
        >
          {filterOptions.sorts.map((sort) => (
            <option key={sort.value} value={sort.value}>
              {sort.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="">キーワード</label>
        <input
          type="text"
          value={formData.keywords?.join(", ")}
          onChange={(e) =>
            setFormData({
              ...formData,
              keywords: e.target.value
                .split(",")
                .map((keyword) => keyword.trim()),
            })
          }
        />
      </div>
    </div>
  );
}

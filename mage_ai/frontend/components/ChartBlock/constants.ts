import BlockType from '@interfaces/BlockType';
import {  } from '@interfaces/ChartBlockType';
import {
  ChartStyleEnum,
  ChartTypeEnum,
  SortOrderEnum,
  TimeIntervalEnum,
  VARIABLE_NAME_BUCKETS,
  VARIABLE_NAME_CHART_STYLE,
  VARIABLE_NAME_GROUP_BY,
  VARIABLE_NAME_LEGEND_LABELS,
  VARIABLE_NAME_LIMIT,
  VARIABLE_NAME_METRICS,
  VARIABLE_NAME_TIME_INTERVAL,
  VARIABLE_NAME_X,
  VARIABLE_NAME_Y,
  VARIABLE_NAME_Y_SORT_ORDER,
} from '@interfaces/ChartBlockType';

export enum ConfigurationItemType {
  COLUMNS = 'columns',
  METRICS = 'metrics',
  NUMBER = 'number',
}

export interface ConfigurationOptionType {
  autoRun?: boolean;
  label: () => string;
  monospace?: boolean;
  options?: string[];
  settings?: {
    maxValues?: number;
  };
  type?: ConfigurationItemType;
  uuid: string;
}

const timeSeriesConfiguration: {
  noCode: ConfigurationOptionType[];
} = {
  noCode: [
    {
      label: () => 'time column',
      settings: {
        maxValues: 1,
      },
      type: ConfigurationItemType.COLUMNS,
      uuid: VARIABLE_NAME_GROUP_BY,
    },
    {
      label: () => 'time interval',
      options: [
        TimeIntervalEnum.ORIGINAL,
        TimeIntervalEnum.SECOND,
        TimeIntervalEnum.MINUTE,
        TimeIntervalEnum.HOUR,
        TimeIntervalEnum.DAY,
        TimeIntervalEnum.WEEK,
        TimeIntervalEnum.MONTH,
        TimeIntervalEnum.YEAR,
      ],
      uuid: VARIABLE_NAME_TIME_INTERVAL,
    },
    {
      label: () => 'metrics',
      type: ConfigurationItemType.METRICS,
      uuid: VARIABLE_NAME_METRICS,
    },
  ],
};

export const CONFIGURATIONS_BY_CHART_TYPE: {
  [chartType: string]: {
    code?: ConfigurationOptionType[];
    noCode: ConfigurationOptionType[];
  };
} = {
  [ChartTypeEnum.BAR_CHART]: {
    noCode: [
      {
        label: () => 'group by columns',
        type: ConfigurationItemType.COLUMNS,
        uuid: VARIABLE_NAME_GROUP_BY,
      },
      {
        label: () => 'metrics',
        type: ConfigurationItemType.METRICS,
        uuid: VARIABLE_NAME_METRICS,
      },
      {
        autoRun: true,
        label: () => 'chart style',
        options: [
          ChartStyleEnum.HORIZONTAL,
          ChartStyleEnum.VERTICAL,
        ],
        uuid: VARIABLE_NAME_CHART_STYLE,
      },
      {
        autoRun: true,
        label: () => 'sort direction',
        options: [
          null,
          SortOrderEnum.ASCENDING,
          SortOrderEnum.DESCENDING,
        ],
        uuid: VARIABLE_NAME_Y_SORT_ORDER,
      },
    ],
    code: [
      {
        label: () => 'variable name of x-axis values',
        monospace: true,
        uuid: VARIABLE_NAME_X,
      },
      {
        label: () => 'variable name of y-axis values',
        monospace: true,
        uuid: VARIABLE_NAME_Y,
      },
    ],
  },
  [ChartTypeEnum.HISTOGRAM]: {
    noCode: [
      {
        label: () => 'number column for chart',
        settings: {
          maxValues: 1,
        },
        type: ConfigurationItemType.COLUMNS,
        uuid: VARIABLE_NAME_GROUP_BY,
      },
      {
        autoRun: true,
        label: () => 'Number of buckets',
        type: ConfigurationItemType.NUMBER,
        uuid: VARIABLE_NAME_BUCKETS,
      },
    ],
    code: [
      {
        label: () => 'variable name of values',
        monospace: true,
        uuid: VARIABLE_NAME_X,
      },
    ],
  },
  [ChartTypeEnum.LINE_CHART]: {
    noCode: [
      {
        label: () => 'group by columns',
        settings: {
          maxValues: 1,
        },
        type: ConfigurationItemType.COLUMNS,
        uuid: VARIABLE_NAME_GROUP_BY,
      },
      {
        label: () => 'metrics',
        type: ConfigurationItemType.METRICS,
        uuid: VARIABLE_NAME_METRICS,
      },
    ],
    code: [
      {
        label: () => 'variable name of x-axis values',
        monospace: true,
        uuid: VARIABLE_NAME_X,
      },
      {
        label: () => 'variable name of y-axis values',
        monospace: true,
        uuid: VARIABLE_NAME_Y,
      },
      {
        label: () => 'labels of lines in chart (comma separated)',
        uuid: VARIABLE_NAME_LEGEND_LABELS,
      },
    ],
  },
  [ChartTypeEnum.PIE_CHART]: {
    noCode: [
      {
        label: () => 'column for chart',
        settings: {
          maxValues: 1,
        },
        type: ConfigurationItemType.COLUMNS,
        uuid: VARIABLE_NAME_GROUP_BY,
      },
      {
        autoRun: true,
        label: () => 'Number of slices',
        type: ConfigurationItemType.NUMBER,
        uuid: VARIABLE_NAME_BUCKETS,
      },
    ],
    code: [
      {
        label: () => 'variable name of values',
        monospace: true,
        uuid: VARIABLE_NAME_X,
      },
    ],
  },
  [ChartTypeEnum.TABLE]: {
    noCode: [
      {
        label: () => 'columns',
        type: ConfigurationItemType.COLUMNS,
        uuid: VARIABLE_NAME_GROUP_BY,
      },
      {
        label: () => 'max number of rows',
        type: ConfigurationItemType.NUMBER,
        uuid: VARIABLE_NAME_LIMIT,
      },
    ],
    code: [
      {
        label: () => 'variable name of columns',
        monospace: true,
        uuid: VARIABLE_NAME_X,
      },
      {
        label: () => 'variable name of rows',
        monospace: true,
        uuid: VARIABLE_NAME_Y,
      },

    ],
  },
  [ChartTypeEnum.TIME_SERIES_BAR_CHART]: timeSeriesConfiguration,
  [ChartTypeEnum.TIME_SERIES_LINE_CHART]: timeSeriesConfiguration,
};

export const DEFAULT_SETTINGS_BY_CHART_TYPE = {
  [ChartTypeEnum.BAR_CHART]: {
    configuration: (block: BlockType) => ({
      [VARIABLE_NAME_X]: 'x',
      [VARIABLE_NAME_Y]: 'y',
      [VARIABLE_NAME_CHART_STYLE]: ChartStyleEnum.VERTICAL,
    }),
    content: (block: BlockType) => {
      return `columns = df_1.columns
x = df_1.columns[:7]
y = [len(df_1[col].unique()) for col in x]
`;
    },
  },
  [ChartTypeEnum.HISTOGRAM]: {
    configuration: (block: BlockType) => ({
      [VARIABLE_NAME_BUCKETS]: 10,
      [VARIABLE_NAME_X]: 'x',
    }),
    content: (block: BlockType) => {
      return `columns = df_1.columns
col = list(filter(lambda x: df_1[x].dtype == float or df_1[x].dtype == int, columns))[0]
x = df_1[col]
`;
    },
  },
  [ChartTypeEnum.LINE_CHART]: {
    configuration: (block: BlockType) => ({
      [VARIABLE_NAME_X]: 'x',
      [VARIABLE_NAME_Y]: 'y',
    }),
    content: (block: BlockType) => {
      return `columns = df_1.columns
cols = list(filter(lambda x: df_1[x].dtype == float or df_1[x].dtype == int, columns))
x = df_1[cols[0]]
y = [df_1[cols[1]]]
`;
    },
  },
  [ChartTypeEnum.PIE_CHART]: {
    configuration: (block: BlockType) => ({
      [VARIABLE_NAME_BUCKETS]: 7,
      [VARIABLE_NAME_X]: 'x',
    }),
    content: (block: BlockType) => {
      return `x = df_1[df_1.columns[0]]`;
    },
  },
  [ChartTypeEnum.TABLE]: {
    configuration: (block: BlockType) => ({
      [VARIABLE_NAME_LIMIT]: 10,
      [VARIABLE_NAME_X]: 'x',
      [VARIABLE_NAME_Y]: 'y',
    }),
    content: (block: BlockType) => {
      return `x = df_1.columns
y = df_1.to_numpy()`;
    },
  },
  [ChartTypeEnum.TIME_SERIES_BAR_CHART]: {
    configuration: (block: BlockType) => ({
      [VARIABLE_NAME_TIME_INTERVAL]: TimeIntervalEnum.ORIGINAL,
    }),
  },
  [ChartTypeEnum.TIME_SERIES_LINE_CHART]: {
    configuration: (block: BlockType) => ({
      [VARIABLE_NAME_TIME_INTERVAL]: TimeIntervalEnum.ORIGINAL,
    }),
  },
};

export const VARIABLE_INFO_BY_CHART_TYPE = {
  [ChartTypeEnum.BAR_CHART]: {
    [VARIABLE_NAME_X]: (): string => 'must be a list of booleans, dates, integers, floats, or strings.',
    [VARIABLE_NAME_Y]: (): string => 'must be a list of lists containing integers or floats.',
  },
  [ChartTypeEnum.HISTOGRAM]: {
    [VARIABLE_NAME_X]: (): string => 'must be a list of integers or floats.',
  },
  [ChartTypeEnum.LINE_CHART]: {
    [VARIABLE_NAME_X]: (): string => 'must be a list of integers or floats.',
    [VARIABLE_NAME_Y]: (): string => 'must be a list of lists containing integers or floats. ' +
      'Each list is a single line in the chart.',
  },
  [ChartTypeEnum.PIE_CHART]: {
    [VARIABLE_NAME_X]: (): string => 'must be a list of booleans, dates, integers, floats, or strings.',
  },
  [ChartTypeEnum.TABLE]: {
    [VARIABLE_NAME_X]: (): string => 'must be a list of strings.',
    [VARIABLE_NAME_Y]: (): string => 'must be a list of lists containing booleans, dates, integers, floats, or strings.',
  },
};

export const CHART_TEMPLATES = [
  {
    label: () => '% of missing values',
    widgetTemplate: () => ({
      configuration: {
        [VARIABLE_NAME_X]: 'columns_with_mising_values',
        [VARIABLE_NAME_Y]: 'percentage_of_missing_values',
        [VARIABLE_NAME_CHART_STYLE]: ChartStyleEnum.HORIZONTAL,
        [VARIABLE_NAME_Y_SORT_ORDER]: SortOrderEnum.DESCENDING,
        chart_type: ChartTypeEnum.BAR_CHART,
      },
      content: `number_of_rows = len(df_1.index)
columns_with_mising_values = []
percentage_of_missing_values = []
for col in df_1.columns:
    missing = df_1[col].isna().sum()
    if missing > 0:
        columns_with_mising_values.append(col)
        percentage_of_missing_values.append(100 * missing / number_of_rows)
`,
    }),
  },
  {
    label: () => 'Unique values',
    widgetTemplate: () => ({
      configuration: {
        [VARIABLE_NAME_X]: 'columns',
        [VARIABLE_NAME_Y]: 'number_of_unique_values',
        [VARIABLE_NAME_CHART_STYLE]: ChartStyleEnum.HORIZONTAL,
        [VARIABLE_NAME_Y_SORT_ORDER]: SortOrderEnum.DESCENDING,
        chart_type: ChartTypeEnum.BAR_CHART,
      },
      content: `columns = df_1.columns
number_of_unique_values = [len(df_1[col].dropna().unique()) for col in columns]
`,
    }),
  },
  {
    label: () => 'Most frequent values',
    widgetTemplate: () => ({
      configuration: {
        [VARIABLE_NAME_X]: 'columns',
        [VARIABLE_NAME_Y]: 'rows',
        chart_type: ChartTypeEnum.TABLE,
      },
      content: `columns = ['column', 'mode value', 'frequency', '% of values']

rows = []
for col in df_1.columns:
    value, column = sorted(
      [(v, k) for k, v in df_1[col].value_counts().items()],
      reverse=True,
    )[0]
    number_of_rows = len(df_1[col].dropna())
    rows.append([
        col,
        column,
        f'{round(100 * value / number_of_rows, 2)}%',
        value,
      ])
rows = sorted(rows, key=lambda t: t[3], reverse=True)
`,
    }),
  },
];

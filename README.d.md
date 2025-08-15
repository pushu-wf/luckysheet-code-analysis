# Luckysheet 源码解析文档指南

---

### **第 1 章：项目全景概览**

1.1 什么是 Luckysheet？
1.2 技术选型分析
1.3 源码获取

---

### **第 2 章：目录结构深度解密**

```markdown
├── src
│ ├── core/ # 核心引擎
│ ├── controllers/ # 用户交互控制中心
│ ├── data/ # 数据模型层
│ ├── render/ # Canvas 渲染引擎
│ ├── plugins/ # 插件系统
│ ├── i18n/ # 国际化实现
│ ├── css/ # 原子化样式体系
│ └── web-worker/ # 多线程计算模块
├── examples/ # 示例项目
├── types/ # TS 类型定义
└── build/ # 定制化 Rollup 构建配置
```

---

### **第 3 章：核心模块源码精析**

#### **3.1 状态中心（Store）**

-   数据模型：`cellMatrix.js` 矩阵存储结构
-   历史管理：`history.js` 命令模式实现
-   公式计算：`formula.js` AST 解析器工作流

#### **3.2 渲染引擎（draw/）**

-   Canvas 分层渲染策略（背景层/数据层/覆盖层）
-   增量渲染算法：`diffCells.js` 优化逻辑
-   视窗优化：虚拟滚动实现（`viewport.js`）

#### **3.3 交互控制器（controllers/）**

-   事件分发中心：`eventHandler.js`
-   选区管理：`selection.js` 边界计算算法
-   键盘系统：`shortcutKey.js` 快捷键映射

#### **3.4 插件系统（expendPlugins/）**

-   事件分发中心：`eventHandler.js`
-   选区管理：`selection.js` 边界计算算法
-   键盘系统：`shortcutKey.js` 快捷键映射

#### **3.5 多语言（locale/）**

-   事件分发中心：`eventHandler.js`
-   选区管理：`selection.js` 边界计算算法
-   键盘系统：`shortcutKey.js` 快捷键映射

---

### **第 4 章：关键技术实现剖析**

#### **4.1 高性能渲染优化**

-   Canvas 离屏渲染技术
-   脏矩形检测实现（`dirtyRect.js`）
-   帧率控制：`requestAnimationFrame`调度策略

#### **4.2 多线程架构**

-   Web Worker 通信协议设计
-   计算任务拆分：`calcWorker.js` 负载均衡
-   共享内存：`SharedArrayBuffer`应用场景

#### **4.3 插件系统设计**

-   插件生命周期管理
-   扩展点机制：`hookCenter.js`
-   官方插件解析（图表/数据验证）

---

### **第 5 章：核心流程源码追踪**

```mermaid
sequenceDiagram
    用户操作->>控制器： 触发事件
    控制器->>数据层： 更新数据模型
    数据层->>渲染引擎： 触发重绘
    渲染引擎->>Canvas： 分层绘制
    控制器->>Worker： 提交计算任务
    Worker-->>控制器： 返回结果
```

---

### **第 6 章：关键类深度解读**

1. **Luckysheet 类**（`src/index.js`）

    - 初始化流程：`init()` 方法拆解
    - 公共 API 暴露策略

2. **单元格模型**（`Cell.js`）

    - 数据-样式分离存储设计
    - 合并单元格处理逻辑

3. **工作簿模型**（`Workbook.js`）
    - 多 Sheet 状态管理
    - 跨 Sheet 引用处理

---

### **第 7 章：进阶主题**

1. 协同编辑实现方案（Operational Transformation）
2. 自定义渲染器开发指南
3. 性能压测报告：万级单元格处理策略
4. 安全机制：XSS 防御与数据沙箱

---

### **第 8 章：开发实践**

1. 如何添加新函数：`CALCULATE`注册流程
2. 主题定制：从`css/variable.css`入手
3. 如何添加自定义菜单？
4. 如何拓展绘制类

---

### **附录**

-   关键文件速查表（30+核心文件说明）

---

**文档特色：**

1. 每章包含源码定位路径（如：`src/core/formula/parser.ts#L120`）
2. 关键算法配有流程图解（Mermaid 语法）
3. 性能关键点标注`🚀Perf Tip`提示
4. 复杂模块提供可交互示例（Vue 组件嵌入）

建议采用**渐进式解析策略**：每个模块按"功能说明 → 接口设计 → 核心实现 → 性能考量"四步走，配合源码截图+注释高亮，确保技术深度与可读性平衡。

<!-- 测试 -->

# 测试

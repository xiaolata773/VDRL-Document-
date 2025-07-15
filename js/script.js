/**
 * 文件数据 - 每个主分类下都有多个文件
 * 4和5分类有子分类(4.1,4.2,4.3和5.1,5.2,5.3)
 */
const fileData = [
    // 0 - 资格预审文件 (5个文件)
    { id: '0-001', name: 'Cover Letter', type: '0', subType: '' },
    { id: '0-002', name: 'Sales Record', type: '0', subType: '' },
    { id: '0-003', name: 'Audited Financial Statement', type: '0', subType: '' },
    { id: '0-004', name: 'Quotation/Offer', type: '0', subType: '' },
    
    // 1 - 项目管理文件 (5个文件)
    { id: '1-001', name: 'Supplier/Master Document Register List (SDRL/VDRL/MDR)', type: '1', subType: '' },
    { id: '1-002', name: 'Project Baseline Schedule', type: '1', subType: '' },
    { id: '1-003', name: 'Project Organization Chart ', type: '1', subType: '' },
    { id: '1-004', name: 'Communication Matrix', type: '1', subType: '' },
    { id: '1-005', name: 'List of Subcontractors/ List of Sub-suppliers', type: '1', subType: '' },
    
    // 2 - 质量文件 (5个文件)
    { id: '2-001', name: 'Project Quality Plan', type: '2', subType: '' },
    { id: '2-002', name: 'Quality Management System (ISO 9000/9001/45001/14001 / SCL)', type: '2', subType: '' },
    { id: '2-003', name: 'Quality Control Plan', type: '2', subType: '' },
    { id: '2-004', name: 'Quality Audit Procedure', type: '2', subType: '' },
    { id: '2-005', name: 'Quality Audit Plan', type: '2', subType: '' },
    
    // 3 - SHE文件 (5个文件)
    { id: '3-001', name: 'SHE Plan', type: '3', subType: '' },
    { id: '3-002', name: 'Environmental Management Plan', type: '3', subType: '' },
    { id: '3-003', name: 'Waste Management Plan', type: '3', subType: '' },
    { id: '3-004', name: 'Emergency Response Plan', type: '3', subType: '' },
    { id: '3-005', name: 'Project Risk Assessment Plan', type: '3', subType: '' },
    
    // 4 - 缆技术文件 (6个文件 - 3个子分类)
    { id: '4-001', name: 'Cable Technical Specification (Cable Design report)', type: '4', subType: '4.1' },
    { id: '4-002', name: 'Cable Data Sheet', type: '4', subType: '4.1' },
    { id: '4-003', name: 'Cable Inspection Test Plan', type: '4', subType: '4.2' },
    { id: '4-004', name: 'Material Receiving Procedure', type: '4', subType: '4.2' },
    { id: '4-005', name: 'Historical Type Test Reports', type: '4', subType: '4.3' },
    { id: '4-006', name: 'Positive Material Identification (PMI) Report', type: '4', subType: '4.3' },
    
    // 5 - 缆附件 (6个文件 - 3个子分类)
    { id: '5-001', name: 'J-Tube Centralizer/Seal GA & LOM', type: '5', subType: '5.1' },
    { id: '5-002', name: 'Bend Restrictor/Stiffener GA & LOM', type: '5', subType: '5.1' },
    { id: '5-003', name: 'Inspection Test Plan for Accessories', type: '5', subType: '5.2' },
    { id: '5-004', name: 'J-Tube Centralizer/Seal Assembly Procedure', type: '5', subType: '5.2' },
    { id: '5-005', name: 'FAT Report for Accessories', type: '5', subType: '5.3' },
    
    
    // 6 - 运输文件 (5个文件)
    { id: '6-001', name: 'Cable Tank/reel GA Drawing', type: '6', subType: '' },
    { id: '6-002', name: 'Cable Tank/reel Design Report', type: '6', subType: '' },
    { id: '6-003', name: 'Equipment Packing Specification', type: '6', subType: '' },
    { id: '6-004', name: 'Storage, Preservation and Shipping Specification', type: '6', subType: '' },
    { id: '6-005', name: 'Special Tools List', type: '6', subType: '' },
    
    // 7 - 现场服务文件 (5个文件)
    { id: '7-001', name: 'Handling and Installation Guidelines', type: '7', subType: '' },
    { id: '7-002', name: 'Operation and Maintenance Manual', type: '7', subType: '' },
    { id: '7-003', name: 'Post installation/post hook up test guidelines', type: '7', subType: '' },
    { id: '7-004', name: 'Installation and monitoring test guidelines', type: '7', subType: '' },
    { id: '7-005', name: 'Testing report during lay and post installation(if any)', type: '7', subType: '' },
    
    // 8 - As Built文件 (5个文件)
    { id: '8-001', name: 'Manufacturing Record Book Index', type: '8', subType: '' },
    { id: '8-002', name: 'Manufacturing  Record Book', type: '8', subType: '' },
    { id: '8-003', name: 'Material Traceability and Manufacturing Records', type: '8', subType: '' },

    
    // 9 - 其他文件 (5个文件)
    { id: '9-001', name: 'Other Document', type: '9', subType: '' },

];

/**
 * 子分类映射
 */
const subCategories = {
    '4': [
        { value: '4.1', label: 'Cable Design' },
        { value: '4.2', label: 'Cable Test Plans & Procedures' },
        { value: '4.3', label: 'Cable Test Reports' }
    ],
    '5': [
        { value: '5.1', label: 'Accessories Design' },
        { value: '5.2', label: 'Accessories Test Plans & Procedures' },
        { value: '5.3', label: 'Accessories Test Reports' }
    ]
};

/**
 * 类型名称映射
 */
const typeNames = {
    '0': '0 - Pre-qualification & Commercial',
    '1': '1 - General Project Management',
    '2': '2 - Quality Management',
    '3': '3 - SHE Management',
    '4': '4 - Cable Engineering',
    '5': '5 - Accessories Engineering',
    '6': '6 - Storage, Loading & Transportation',
    '7': '7 - Site Service including Handling & Maintenance ',
    '8': '8 - As Built Document',
    '9': '9 - Any other Documents'
};

/**
 * 获取DOM元素
 */
const globalPoDateInput = document.getElementById('globalPoDate');
const globalCustomerDaysInput = document.getElementById('globalCustomerDays');
const applyGlobalTimeBtn = document.getElementById('applyGlobalTime');
const categorySection = document.getElementById('categorySection');
const exportBtn = document.getElementById('exportBtn');
const resetBtn = document.getElementById('resetBtn');
const statusEl = document.getElementById('status');

/**
 * 文件时间数据
 */
let fileTimes = {};

/**
 * 当前选中的文件
 */
let selectedFiles = [];

/**
 * 初始化函数
 */
function init() {
    // 初始化文件时间数据
    initializeFileTimes();
    
    // 设置事件监听器
    setupEventListeners();
    
    // 创建分类下拉框
    createCategoryDropdowns();
}

/**
 * 初始化文件时间数据
 */
function initializeFileTimes() {
    fileData.forEach(file => {
        fileTimes[file.id] = {
            poDate: '2025-07-15',
            customerDate: '2025-07-29'
        };
    });
}

/**
 * 设置事件监听器
 */
function setupEventListeners() {
    // 应用全局时间设置
    applyGlobalTimeBtn.addEventListener('click', applyGlobalTime);
    
    // 按钮事件
    exportBtn.addEventListener('click', exportToExcel);
    resetBtn.addEventListener('click', resetSelection);
}

/**
 * 应用全局时间设置
 */
function applyGlobalTime() {
    const poDate = globalPoDateInput.value;
    const customerDays = parseInt(globalCustomerDaysInput.value) || 0;
    
    // 计算客户返回日期
    const customerDate = addDays(poDate, customerDays);
    
    // 更新所有文件的时间
    Object.keys(fileTimes).forEach(fileId => {
        fileTimes[fileId] = {
            poDate: poDate,
            customerDate: customerDate
        };
    });
    
    // 更新UI
    updateAllFileTimeInputs();
    
    updateStatus(`已将所有文件时间设置为: PO Date ${poDate}, Planned Submission Date ${customerDate}`, 'success');
}

/**
 * 日期加法函数
 * @param {string} dateStr - 起始日期字符串 (YYYY-MM-DD)
 * @param {number} days - 要添加的天数
 * @returns {string} 新的日期字符串 (YYYY-MM-DD)
 */
function addDays(dateStr, days) {
    const date = new Date(dateStr);
    date.setDate(date.getDate() + days);
    return formatDate(date);
}

/**
 * 日期格式化函数
 * @param {Date} date - 日期对象
 * @returns {string} 格式化后的日期字符串 (YYYY-MM-DD)
 */
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * 创建分类下拉框
 */
function createCategoryDropdowns() {
    // 清空现有内容
    categorySection.innerHTML = '';
    
    // 为每个主分类创建下拉框
    Object.entries(typeNames).forEach(([type, name]) => {
        const category = document.createElement('div');
        category.className = 'category';
        
        const header = document.createElement('div');
        header.className = 'category-header';
        
        const title = document.createElement('span');
        title.textContent = name;
        
        const actions = document.createElement('div');
        actions.className = 'category-actions';
        
        // 添加全选按钮
        const selectAllBtn = document.createElement('button');
        selectAllBtn.className = 'select-all-btn';
        selectAllBtn.textContent = 'Select All';
        selectAllBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleSelectAll(type);
        });
        
        actions.appendChild(selectAllBtn);
        
        header.appendChild(title);
        header.appendChild(actions);
        
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
        });
        
        const content = document.createElement('div');
        content.className = 'category-content';
        content.style.display = 'none'; // 默认折叠
        
        // 获取该分类下的文件
        const categoryFiles = fileData.filter(file => file.type === type);
        
        // 如果有子分类，按子分类分组
        if (subCategories[type]) {
            subCategories[type].forEach(subCat => {
                const subTitle = document.createElement('div');
                subTitle.className = 'subcategory-title';
                subTitle.textContent = subCat.label;
                content.appendChild(subTitle);
                
                const subFiles = categoryFiles.filter(file => file.subType === subCat.value);
                createFileItems(subFiles, content);
            });
            
            // 添加未分类的文件
            const uncategorizedFiles = categoryFiles.filter(file => !file.subType);
            if (uncategorizedFiles.length > 0) {
                const subTitle = document.createElement('div');
                subTitle.className = 'subcategory-title';
                subTitle.textContent = '其他文件';
                content.appendChild(subTitle);
                createFileItems(uncategorizedFiles, content);
            }
        } else {
            // 没有子分类，直接显示文件
            createFileItems(categoryFiles, content);
        }
        
        category.appendChild(header);
        category.appendChild(content);
        categorySection.appendChild(category);
    });
}

/**
 * 创建文件项
 * @param {Array} files - 文件数组
 * @param {HTMLElement} container - 容器元素
 */
function createFileItems(files, container) {
    files.forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'file-checkbox';
        checkbox.id = `check-${file.id}`;
        checkbox.addEventListener('change', function() {
            toggleFileSelection(file.id, this.checked);
        });
        
        const fileInfo = document.createElement('div');
        fileInfo.className = 'file-info';
        
        const fileName = document.createElement('div');
        fileName.className = 'file-name';
        fileName.textContent = file.name;
        
        const fileTime = document.createElement('div');
        fileTime.className = 'file-time';
        
        // PO时间
        const poTimeGroup = createTimeGroup('PO Date', 'poDate', file.id);
        // 客户返回日期
        const customerTimeGroup = createTimeGroup('Planned Submission', 'customerDate', file.id);
        
        fileTime.appendChild(poTimeGroup);
        fileTime.appendChild(customerTimeGroup);
        
        fileInfo.appendChild(fileName);
        fileInfo.appendChild(fileTime);
        
        fileItem.appendChild(checkbox);
        fileItem.appendChild(fileInfo);
        
        container.appendChild(fileItem);
    });
}

/**
 * 创建时间输入组
 * @param {string} labelText - 标签文本
 * @param {string} timeType - 时间类型 (poDate/customerDate)
 * @param {string} fileId - 文件ID
 * @returns {HTMLElement} 时间组元素
 */
function createTimeGroup(labelText, timeType, fileId) {
    const group = document.createElement('div');
    group.className = 'time-group';
    
    const label = document.createElement('label');
    label.textContent = labelText;
    label.htmlFor = `${timeType}-${fileId}`;
    
    const input = document.createElement('input');
    input.type = 'date';
    input.id = `${timeType}-${fileId}`;
    input.value = fileTimes[fileId][timeType];
    input.addEventListener('change', function() {
        updateFileTime(fileId, timeType, this.value);
    });
    
    group.appendChild(label);
    group.appendChild(input);
    
    return group;
}

/**
 * 更新文件时间
 * @param {string} fileId - 文件ID
 * @param {string} timeType - 时间类型
 * @param {string} value - 新值
 */
function updateFileTime(fileId, timeType, value) {
    fileTimes[fileId][timeType] = value;
}

/**
 * 更新所有文件时间输入框
 */
function updateAllFileTimeInputs() {
    Object.entries(fileTimes).forEach(([fileId, times]) => {
        document.getElementById(`poDate-${fileId}`).value = times.poDate;
        document.getElementById(`customerDate-${fileId}`).value = times.customerDate;
    });
}

/**
 * 切换全选/取消全选
 * @param {string} type - 文件类型
 */
function toggleSelectAll(type) {
    // 获取该分类下的所有文件ID
    const categoryFiles = fileData.filter(file => file.type === type).map(file => file.id);
    
    // 检查是否已经全部选中
    const allSelected = categoryFiles.every(fileId => selectedFiles.includes(fileId));
    
    // 切换选中状态
    categoryFiles.forEach(fileId => {
        const checkbox = document.getElementById(`check-${fileId}`);
        if (checkbox) {
            checkbox.checked = !allSelected;
            toggleFileSelection(fileId, !allSelected);
        }
    });
    /**设置全选 取消全选 */
    updateStatus(allSelected ? `All selections have been canceled. ${typeNames[type]}` : `Select All ${typeNames[type]}`);
}

/**
 * 切换文件选择状态
 * @param {string} fileId - 文件ID
 * @param {boolean} isSelected - 是否选中
 */
function toggleFileSelection(fileId, isSelected) {
    if (isSelected && !selectedFiles.includes(fileId)) {
        selectedFiles.push(fileId);
    } else if (!isSelected && selectedFiles.includes(fileId)) {
        selectedFiles = selectedFiles.filter(id => id !== fileId);
    }
    
    updateStatus();
}

/**
 * 重置选择
 */
function resetSelection() {
    // 清除选择
    selectedFiles = [];
    
    // 取消所有复选框的选中状态
    document.querySelectorAll('.file-checkbox').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    updateStatus('选择已重置');
}

/**
 * 导出到Excel
 */
function exportToExcel() {
    if (selectedFiles.length === 0) {
        updateStatus('请先选择要导出的文件', 'error');
        return;
    }
    
    try {
        // 准备Excel数据
        const excelData = [
            ['Document Title', 'PO Date', 'Planned Submission Date'],
            ...selectedFiles.map(fileId => {
                const file = fileData.find(f => f.id === fileId);
                const times = fileTimes[fileId];
                return [
                    file.name,
                    times.poDate,
                    times.customerDate
                ];
            })
        ];
        
        // 创建工作簿
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(excelData);
        
        // 设置列宽
        ws['!cols'] = [
            { width: 30 },  // 文件名称
            { width: 15 },  // PO计划时间
            { width: 15 }   // 客户返回日期
        ];
        
        // 添加工作表
        XLSX.utils.book_append_sheet(wb, ws, "文件时间表");
        
        // 生成文件名
        const dateStr = new Date().toISOString().slice(0, 10);
        const fileName = `文件时间表_${dateStr}.xlsx`;
        
        // 导出文件
        XLSX.writeFile(wb, fileName);
        
        updateStatus(`成功导出 ${selectedFiles.length} 个文件到 ${fileName}`, 'success');
    } catch (error) {
        console.error('导出错误:', error);
        updateStatus(`导出失败: ${error.message}`, 'error');
    }
}

/**
 * 更新状态信息
 * @param {string} message - 状态消息
 * @param {string} type - 消息类型 ('success' 或 'error')
 */
function updateStatus(message = '', type = '') {
    if (!message) {
        message = `已选择 ${selectedFiles.length} 个文件`;
    }
    
    statusEl.textContent = message;
    statusEl.className = 'status';
    
    if (type === 'success') {
        statusEl.classList.add('success');
    } else if (type === 'error') {
        statusEl.classList.add('error');
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', init);

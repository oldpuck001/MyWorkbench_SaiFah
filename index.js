// index.js

import { modifythefilenameFunction } from './tools/modifythefilename.js'
import { characterFunction } from './tools/character.js'
import { imageFunction } from './tools/image.js'
import { sortFunction } from './tools/sort.js'
import { exportFunction } from './tools/export.js'
import { collect_fileFunction } from './tools/collect_file.js'
import { copy_folderFunction } from './tools/copy_folder.js'

import { text_comparison } from './other_tools/text_comparison.js'
import { docx_comparison } from './other_tools/docx_comparison.js'

import { select_folder } from './audit_tools/select_folder.js';
import { set_up } from './audit_tools/set_up.js';
import { import_account_balance_sheet } from './audit_tools/import_account_balance_sheet.js';
import { import_chronological_account } from './audit_tools/import_chronological_account.js';

document.querySelectorAll('.sidebar > ul > li').forEach(item => {
    item.addEventListener('click', function (e) {
        // 检查是否有子菜单
        const sublist = this.querySelector('ul');
        if (sublist) {
            e.stopPropagation();
            sublist.classList.toggle('active');
        }
    });
});

document.querySelectorAll('.sidebar ul ul li').forEach(item => {
    item.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleSidebarBtn');
    const content = document.getElementById('content');

    window.toggleSidebar = function () {
        if (sidebar.classList.contains('hidden')) {
            sidebar.classList.remove('hidden');
            sidebar.style.width = '250px';
            toggleBtn.style.left = '265px';
            content.style.marginLeft = '250px';
        } else {
            sidebar.classList.add('hidden');
            sidebar.style.width = '0';
            toggleBtn.style.left = '10px';
            content.style.marginLeft = '0';
        }
    };
});

// 页面加载后自动显示的页面
window.addEventListener('DOMContentLoaded', () => {
    window.index_pageFunction();
});

window.index_pageFunction = function() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `<h1>欢迎使用</h1>`;
}

window.tools_modifythefilenameFunction = function() {
    modifythefilenameFunction();
}

window.tools_characterFunction = function() {
    characterFunction();
}

window.tools_imageFunction = function() {
    imageFunction();
}

window.tools_exportFunction = function() {
    exportFunction();
}

window.tools_sortFunction = function() {
    sortFunction();
}

window.tools_collect_fileFunction = function() {
    collect_fileFunction();
}

window.tools_copy_folderFunction = function() {
    copy_folderFunction();
}



window.text_comparison = function() {
    text_comparison();
}

window.docx_comparison = function() {
    docx_comparison();
}



window.select_folder = function() {
    select_folder();
}

window.set_up = function() {
    set_up();
}

window.import_account_balance_sheet = function() {
    import_account_balance_sheet();
}

window.import_chronological_account = function() {
    import_chronological_account();
}
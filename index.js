// index.js

import { modifythefilenameFunction } from './tools/modifythefilename.js'
import { characterFunction } from './tools/character.js'
import { imageFunction } from './tools/image.js'
import { sortFunction } from './tools/sort.js'
import { exportFunction } from './tools/export.js'
import { collect_fileFunction } from './tools/collect_file.js'
import { copy_folderFunction } from './tools/copy_folder.js'
import { text_comparison } from './tools/text_comparison.js'
import { docx_comparison } from './tools/docx_comparison.js'

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
    contentDiv.innerHTML = `
        <h1>欢迎使用</h1>
        <div class="import">
            <div>
                <canvas id="imageCanvas" width="860" height="540" style="display: block; margin: 0px auto;"></canvas>
            </div>
        </div>
        `;

    const canvas = document.getElementById('imageCanvas');
    const ctx = canvas.getContext('2d');
    let img = new Image();
    let scale = 1.0;
    let rotation = 0;
    let offsetX = 0, offsetY = 0; // 圖片偏移位置
    let isDragging = false;
    let startX = 0, startY = 0;
    let lastX = 0, lastY = 0;
    let velocityX = 0, velocityY = 0;
    let friction = 0.9;  // 慣性滾動摩擦係數

    // 加載初始圖片
    img.src = 'tools/image.jpeg';
    img.onload = () => {
        setInitialScaleAndDrawImage();
    };

    // 根據 canvas 尺寸設置圖片初始縮放比例
    function setInitialScaleAndDrawImage() {
        // 獲取圖片和 canvas 的寬高比
        const imgAspectRatio = img.width / img.height;
        const canvasAspectRatio = canvas.width / canvas.height;

        // 根據 canvas 與圖片的寬高比調整縮放比例
        if (imgAspectRatio > canvasAspectRatio) {
            // 當圖片寬高比大於 canvas，將縮放比例設為 canvas 寬度與圖片寬度的比例
            scale = canvas.width / img.width;
        } else {
            // 當圖片寬高比小於或等於 canvas，將縮放比例設為 canvas 高度與圖片高度的比例
            scale = canvas.height / img.height;
        }

        drawImage();
    }

    // 渲染圖片
    function drawImage() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);  // 清除畫布
        ctx.save(); // 保存當前繪製狀態
        ctx.translate(canvas.width / 2 + offsetX, canvas.height / 2 + offsetY);
        ctx.rotate(rotation * Math.PI / 180);  // 旋轉圖片
        ctx.scale(scale, scale);  // 縮放圖片
        ctx.drawImage(img, -img.width / 2, -img.height / 2);  // 繪製圖片
        ctx.restore();  // 還原繪製狀態
    }
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
        <legend>站点信息</legend>
        <div>
            <table class="table table-striped table-bordered table-condensed">
                <thead>
                    <tr>
                        <th>站名</th>
                        <th>编号</th>
                        <th>经度</th>
                        <th>纬度</th>
                        <th>检测要素</th>
                        <th>站点类型</th>
                        <th>所属单位</th>
                        <th>建站日期</th>
                        <th>备注</th>
                        <th>编辑</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody>
                    {{#items}}
                    <tr>
                        <td>{{site}}</td>
                        <td>{{sid}}</td>
                        <td>{{longitude}}</td>
                        <td>{{latitude}}</td>
                        <td>{{elements}}</td>
                        <td>{{sitetype}}</td>
                        <td>{{sunit}}</td>
                        <td>{{sitedate}}</td>
                        <td>{{remark}}</td>
                        <td><button class="btn btn-primary edit" value={{id}}>修改</button></td>
                        <td><button class="btn delete" value={{id}}>删除</button></td>
                    </tr>
                    {{/items}}
                    {{^items}}
                    <tr>
                        <td colspan=11>暂无数据</td>
                    </tr>
                    {{/items}}
                </tbody>
            </table>
        </div>
        <!--
        <div class="span4">
            <ul class="pager">
                <li id="prev" class="disabled"><a href="javascript://">前一页</a></li>
                <li id="next"><a href="javascript://">下一页</a></li>
            </ul>
        </div>
        -->
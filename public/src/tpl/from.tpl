        <form class="form-horizontal" method="post">
            <fieldset>
                <legend>建站信息</legend>
                <div class="control-group">
                    <label class="control-label" for="site">站点 ：</label>
                    <div class="controls">
                        <input type="text" class="input-xlarge" name="site" value="{{site}}" id="site" placeholder="请输入站点名称">
                        <span class="help-inline" id="site-help"></span>
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="sid">编号 ：</label>
                    <div class="controls">
                        <input type="text" class="input-xlarge" name="sid" value="{{sid}}" id="sid" placeholder="请输入站点编号">
                        <span class="help-inline" id="sid-help"></span>
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="longitude">经度 ：</label>
                    <div class="controls">
                        <input type="text" class="input-xlarge" name="longitude" value="{{longitude}}" id="longitude" placeholder="请输入经度值">
                        <span class="help-inline" id="longitude-help"></span>
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="latitude">纬度 ：</label>
                    <div class="controls">
                        <input type="text" class="input-xlarge" name="latitude" value="{{latitude}}" id="latitude" placeholder="请输入纬度值">
                        <span class="help-inline" id="latitude-help"></span>
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="elements">监测要素 ：</label>
                    <div class="controls">
                        {{#element}}
                        <label class="checkbox inline">
                            <input type="checkbox" name="elements" value="{{this}}">{{this}}
                        </label>
                        {{/element}}
						<span class="help-inline" id="elements-help"></span>
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="site-type">站点类型 ：</label>
                    <div class="controls">
                        {{#siteType}}
                        <input name="site-type" type="radio" checked value="{{this}}">{{this}}
                        {{/siteType}}
						<span class="help-inline" id="sitetype-help"></span>
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="sunit">所属单位 ：</label>
                    <div class="controls">
                        <select class="span2" id="sunit" name="sunit">
                            <option value="省水利厅" selected>省水利厅</option>
                            <option value="省防办">省防办</option>
                            <option value="泉州水利厅">泉州水利厅</option>
                            <option value="0">其他...</option>
                        </select>
                        <input type="text" class="span2" id="unit" name="unit" value="">
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="sitedate">建站日期 ：</label>
                    <div class="input-append date controls" id="setdate">
                        <input type="text" name="sitedate" value="{{sitedate}}" id="sitedate" data-format="yyyy-MM-dd" readonly/>
                        <span class="add-on">
                            <i data-time-icon="icon-time" data-date-icon="icon-calendar"></i>
                        </span>
                        <span class="help-inline" id="sitedate-help"></span>
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="remark">备注 ：</label>
                    <div class="controls error">
                        <textarea id="remark" name="remark" class="input-xlarge" rows="3" placeholder="站点信息备注">{{remark}}</textarea>
                        <span class="help-inline" id="remark-help"></span>
                    </div>
                </div>
                <div class="form-actions">
                    <button class="btn btn-primary" id='add' type="button">确定</button>
                    <button class="btn" type="reset">重置</button>
                </div>
            </fieldset>
        </form>